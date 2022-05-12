const mongoose          = require("mongoose");
const userSchema        = new mongoose.Schema({
    username: {
        type:       String,
        required:   true,
        unique:     true,
    },
    password: {
        type:       String,
        required:   true,
    },
    signupType: {
        type:       String,
        default:    'email'
    }
});

module.exports = mongoose.model("User", userSchema)