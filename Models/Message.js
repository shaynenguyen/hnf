const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
    Username:       String,
    Avatar:         String,
    Message:        String,
    Date:           Date
});

module.exports = mongoose.model("Message", MessageSchema);