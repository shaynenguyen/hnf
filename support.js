const fs            = require("fs");

module.exports = {
    loadconfigfile: function(){
        fs.readFile("./config.json", "utf-8", function(err, data){
            if(err) throw err;
            var config = JSON.parse(data);
        })
    },
    anotherMethod: function(){}
};