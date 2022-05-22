/*
    CONFIG ROUTES FOR NODE APP
*/

// Dependencies
const mongoose    = require('mongoose')
require('dotenv').config();

// Route in use
const projectRoute          = require('./routes/projectR');
const userRoute             = require('./routes/userR')

module.exports = async (app) => {
    // Connect to Database Host
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err) {
            console.log("Database connection has counter an error: " + err);
        }else {
            // Connection  status
            console.log("Database (MongoDB) is connected !!!");

            // Routes
            app.use('/project', projectRoute);
            app.use('/user', userRoute);
        }
    })
}