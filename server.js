const express       = require("express");
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser");
const Binance       = require("node-binance-api");
const expressLayout = require("express-ejs-layouts");
const fs            = require("fs");
const app           = express();
const server        = require("http").Server(app);
const io            = require("socket.io")(server);
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
app.set('layout', '_layout');

app.io = io;

// Socket Configuration
require("./Routes/io")(io);

// READ & LOAD config file
loadconfigfile("./config.json")
function loadconfigfile(file){
    var obj;
    fs.readFile(file, "utf-8", function(err, data){
        if(err) throw err;
        obj = JSON.parse(data);

        // Binance
        require("./Routes/binance")(app, Binance, obj);
        // Route for client
        require("./Routes/client")(app, obj);

        require("./Routes/test")(app, urlencodedParser);

    });
}

// Database Connection
mongoose.connect()

// ERROR handle
// app.use((req, res) => {
//     res.status(404).render('error', {title: 'Page Not found', content: 'Error 404 !!!'})
// })

server.listen(port, () => {
    console.log('Server is listening at http://localhost:' + port)
})