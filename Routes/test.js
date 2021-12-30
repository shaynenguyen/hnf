module.exports = function(app, urlencodedParser){
    // Test with GET/POST
    app.get('/hello/:id', (req, res) => {
        var i = req.params.id

        res.send('GET request have received !')
        console.log('Server received: ' + i)
    })

    app.post('/hello', urlencodedParser, (req, res) => {
        var testNumber = req.body.number
        res.send('POST request have completed !' + testNumber)
        console.log('Server received by POST: ' + testNumber)
    })
}

// console.log(require('./organisation'))