const express       = require("express");
const bodyParser    = require("body-parser");
const expressLayout = require("express-ejs-layouts");
const app           = express();
const port          = 3000;

// MIDDLEWARE CONFIGURATION HERE
// -----------------------------
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Static Files
app.use(express.static('Public'))
// Example for other folders - not required
// app.use('/css', express.static(__dirname + 'public/css'))

// view engine
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('views', './Views');
app.set('layout', '_layout')


app.get('/', (req, res) => {
    res.render('home', {title: 'Welcome to HNF Homepage !'})
})
app.get('/about', (req, res) => {
    res.render('about',{title: 'About HNF Project !'})
})

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

app.listen(port, () => {
    console.log('App is listening at http://localhost:' + port)
})