const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema({
    first_name: {
        type:       String,
        required:   true,
    },
    last_name:  {
        type:       String,
        required:   true,
    },
    username:   {
        type:       String,
        required:   true,
    },
    avatar:     {
        type:       String,
        url:        String,
    },
    department: {
        type:       String,
        required:   true
    },
    job_title:  {
        type:       String,
        required:   true
    }
});

module.exports = mongoose.model("Staff", staffSchema);