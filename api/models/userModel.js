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
    thumbnail: {
        type:       String,
        default:    null
    }
},{timestamps: true});

module.exports = mongoose.model("User", userSchema)