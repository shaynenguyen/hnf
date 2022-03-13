/*
    CONFIG ROUTES FOR NODE APP
*/

// Dependencies
const   mongoose            = require("mongoose");
const   request             = require("request");

// Route in use
const projectRoute          = require("../Routes/project");
const staffRoute            = require('../Routes/staff');
const binanceRoute          = require("../Routes/binance");
const userRoute             = require("../Routes/user")

module.exports = async function(app){

    // Connect to Database Host
    await mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology:true }, function(err){
        if(err) {
            console.log("Database connected error! " + err);
        }else{
            // Connection  status
            console.log("Database (MongoDB) is connected !!!");
            console.log("ENABLE server EndPoint")

            // Routes
            app.use('/project', projectRoute);
            app.use('/staff', staffRoute);
            app.use('/user', userRoute);
        }
    })

    await request('http://api.binance.com/sapi/v1/system/status', function(error, response, body){
        body = JSON.parse(body)
        if (body.status == 0){
            // Alert of Binance API
            console.log("API [BINANCE] is in normal stream !!!")

            app.use('/binance', binanceRoute);
        }else{
            console.log("Something wrong with Binance API !")
            console.log({error});
            console.log('statusCode:', response && response.statusCode);
        }
    })
    app.get('/', (req, res) => {
        console.log("Hello World!");
        res.send('Hello World')
    })

};