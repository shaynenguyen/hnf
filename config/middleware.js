const cors = require("cors");
/*
    CONFIG MIDDLEWARE IN USE FOR NODEJS SERVER
**/
module.exports = function(app){
    app.use(cors());
}