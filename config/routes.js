/*
    CONFIG ROUTES FOR NODE APP
*/

// Route in use
const projectRoute  = require("../Routes/project");
const staffRoute    = require('../Routes/staffV');

module.exports = function(app){
    app.get('/', (req, res) => {
        console.log("Hello World!");
        res.send('Hello World')
    })
    app.use('/project', projectRoute);
    app.use('/staff', staffRoute);
};