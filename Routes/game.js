const HocVien = require("../Models/HocVien");

module.exports = function(app){
    app.get('/game', function(req, res){
        var Teo = new HocVien({
            Email:      "String@gmail.com",
            HoTen:      "String Nguyen",
            SoDT:       "0497 837 646",
            ThanhToan:  false,
            Wallet:     "asld;h33__fkwookchdohw",
            Ngay:       Date.now()
        })
        res.json(Teo);
    })

    // Retrieve whole collection
    app.get('/hocviens', (req, res) => {
        HocVien.find()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    // Retrieve by Id
    app.get('/hocvien/:id', (req, res) => {
        HocVien.findById(req.params.id)
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    // Create new HocVien
    app.post('/hocvien', app.urlencoded , (req, res) => {
        var newHocVien = new HocVien(req.body);
        newHocVien.ThanhToan = false;
        newHocVien.Ngay = Date.now();

        // Uncomment when finalise
        newHocVien.save()
            .then((result) => {
                res.redirect('/hocviens');
            })
            .catch((err) => {
                console.log(err);
            })
    })

    // Delete selected HocVien
    app.delete('/hocvien/:id', (req, res) => {
        HocVien.findByIdAndDelete(req.params.id)
            .then(result => {
                res.redirect('/hocviens');
                res.json({redirect: '/hocviens'})
            })
            .catch(err => {
                console.log(err)
            })
    })
}