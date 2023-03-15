const mongoose          = require("mongoose");
const bcrypt            = require("bcrypt");
const crypto            = require("crypto");
const jwt               = require("jsonwebtoken");
require('dotenv').config();

const userSchema        = new mongoose.Schema({
    username: {
        type:       String,
        required:   [true, "Please provide a username"],
        unique:     true,
    },
    email: {
        type:       String,
        required:   true,
        unique:     true,
        match:      [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email address"
        ]
    },
    password: {
        type:       String,
        required:   [true, "Please add a password"],
        minlength:  8,
        select:     false
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
    },
    resetPasswordToken:     String,
    resetPasswordExpire:    Date
},{timestamps: true});

/**
 * Pre-check before saving action to db
 * Will perform before overwritten/update methods.
 */
userSchema.pre("save", async function(next){

    // Check whether password is modified.
    if(!this.isModified("password")){
        next()
    }

    // Generate Salt from bcrypt
    // Higher number is better, 10 is fine
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next()
});

/**
 * Use advance mongoose methods to compare password
 * It runs inside User model layer
 *
 * @param {String} password
 * @returns Boolean
 */
userSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password)
}

/**
 * Generage token by provided secret.
 *
 * @returns token
 */
userSchema.methods.getSignedToken = function(){
    return jwt.sign(
        {
            id: this._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE
        })
}

userSchema.methods.getResetPasswordToken = () => {
    const resetToken = crypto.randomBytes(30).toString("hex");

    this.resetPasswordToken = crypto
                                .createHash("sha256")
                                .update(resetToken)
                                .digest("hex");

    this.resetPasswordExpire = Date.now() + 12 * (60 * 60 * 1000);

    return resetToken;
}

module.exports = mongoose.model("User", userSchema)