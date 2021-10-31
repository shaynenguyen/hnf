const Project = require("../Models/Project");

module.exports = function(app){
    // Retrieve whole Project in list
    app.get('/projects', (req, res) => {
        Project.find()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log("Errors Project: " + err)
            })
    }),

    // Find recent id
    app.get('/project/:id', (req, res) => {
        Project.findById(req.params.id)
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }),

    // Find Next/Previous id
    app.get('/project/:id/next', (req, res) => {
        Project.find({_id: {$gt: req.params.id}}).sort({_id: 1}).limit(1)
            .then((result) => {
                res.send(result[0]._id.toString())
            })
            .catch((err) => {
                console.log(err)
            })
    }),
    app.get('/project/:id/previous', (req, res) => {
        Project.find({_id: {$lt: req.params.id}}).sort({_id: -1}).limit(1)
            .then((result) => {
                res.send(result[0]._id.toString())
            })
            .catch((err) => {
                console.log(err)
            })
    })
}