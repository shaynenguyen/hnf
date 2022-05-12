const bodyParser =  require('body-parser')
const app        =  require('express')()

app.use(bodyParser.json())
app.get('/testJSON', (req, res) => {
    res.json({ data: 'data'})
    console.log("IN rest.js")
})

module.exports = app