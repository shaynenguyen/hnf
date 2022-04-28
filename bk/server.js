// 1. Import dependencies
const express       = require("express");
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser");
const Binance       = require("node-binance-api");
const history       = require("connect-history-api-fallback");
const expressLayout = require("express-ejs-layouts");
const fs            = require("fs");
const cors          = require("cors");
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

// 2. Route in use
const projectRoute  = require("./Routes/project");
const staffRoute    = require("./Routes/staff");

// view engine
app.use(cors());

// app.use(history());
app.use(expressLayout);
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './Views');
app.set('layout', '_layout');

// App config
app.io = io;
app.urlencoded = urlencodedParser;
var config;

// General Configuration
require("./Routes/io")(io);

// READ & LOAD config file
loadconfigfile("./config.json")
function loadconfigfile(file){
    fs.readFile(file, "utf-8", function(err, data){
        if(err) throw err;
        config = JSON.parse(data);

        // Database Connection
        mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology:true }, function(err){
            if(err) {
                console.log("Database connected error! " + err);
            }else{
                console.log("Database is connected !!!");
            }

        })

        // Binance
        require("./Routes/binance")(app, Binance, config);
        // Route for client
        require("./Routes/client")(app, config);

        require("./Routes/test")(app, urlencodedParser);

    });
}

// Common Routes
require("./Routes/game")(app);
app.use('/project', projectRoute);
app.use('/staff', staffRoute);

// ERROR handle
// app.use((req, res) => {
//     res.status(404).render('error', {title: 'Page Not found', content: 'Error 404 !!!'})
// })

server.listen(port, () => {
    console.log('Server is listening at http://localhost:' + port)
})