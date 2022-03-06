/*
    CONFIG ROUTES FOR NODE APP
*/

// Dependencies
const   mongoose    = require("mongoose");

// Route in use
const projectRoute  = require("../Routes/project");
const staffRoute    = require('../Routes/staff');
const binanceRoute  = require("../Routes/binance");

module.exports = async function(app){

    // Connect to Database Host
    await mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology:true }, function(err){
        if(err) {
            console.log("Database connected error! " + err);
        }else{
            // Connection  status
            console.log("Database (MongoDB) is connected !!!");

            // Routes
            app.use('/project', projectRoute);
            app.use('/staff', staffRoute);
            app.use('/binance', binanceRoute);

            // Alert of Binance API
            console.log("Binance API is setup !!!")
        }
    })
    app.get('/', (req, res) => {
        console.log("Hello World!");
        res.send('Hello World')
    })

};