/*
    CONFIG ROUTES FOR NODE APP
*/

// Dependencies
const  fs           = require("fs");
const  mongoose     = require("mongoose");

// Route in use
const projectRoute  = require("../Routes/project");
const staffRoute    = require('../Routes/staffV');

module.exports = function(app){
    app.get('/', (req, res) => {
        console.log("Hello World!");
        res.send('Hello World')
    })

    // Connect to Database Host
    mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology:true }, function(err){
        if(err) {
            console.log("Database connected error! " + err);
        }else{
            // Connection  status
            console.log("Database (MongoDB) is connected !!!");

            // Routes
            app.use('/project', projectRoute);
            app.use('/staff', staffRoute);
        }
    })

};