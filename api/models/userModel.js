const mongoose          = require("mongoose");
const userSchema        = new mongoose.Schema({
    username: {
        type:       String,
        required:   true,
        unique:     true,
    },
    email: {
        type:       String,
        required:   true,
        unique:     true,
    },
    password: {
        type:       String,
        required:   true,
    },
    type: {
        type:       String,
        default:    'local'
    },
    refId: {
        type:       String,
        default:    null
    },
    photo: {
        type:       String,
        default:    null
    }
});

module.exports = mongoose.model("User", userSchema)