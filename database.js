const mongoose      = require("mongoose");

// Database Connection
mongoose.connect(config.DB, function(err){
    if(err) {
        console.log("Database connected error! " + err);
    }else{
        console.log("Database is connected !!!");
    }

})

