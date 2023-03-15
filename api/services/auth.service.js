/*
    IN api/services/authService
*/
const User              = require('../models/user.model');
const ErrorResponse     = require('../utils/errorResponse');
const { sendEmail }     = require('../utils/email');

// Register
const register = async (res, data, next) => {
    const { username, email, password } = data;

    // Actually create user in DB
    const user = await User.create({
        username, email, password
    });

    // Send actual token to be saved on localStorage
    return sendToken(user, 201, res);
}

/**
 * Login Service
 *
 * @param {Object} res
 * @param {String} data
 * @param {Function} next
 *
 * @returns {String} token
 */
const login = async (res, data, next) => {
    const { email, password } = data;

    // Query User in DB by email
    const user = await User.findOne({ email }).select("+password");

    // User Not Found
    if(!user){
        return next(new ErrorResponse("Invalid Credentials.", 401));
    }

    // Indicate querried user has same login password
    // By: using in model methods
    const isMatch = await user.matchPasswords(password);

    // When Not Mached
    if(!isMatch){
        return next(new ErrorResponse("Invalid Password Credentials.", 401))
    }

    // Send actual token to be saved on localStorage
    return sendToken(user, 200, res);
}

/**
 * Forgotpassword Service.
 *
 * @param {Object} res
 * @param {String} data
 * @param {Function} next
 *
 * @returns {String} token
 */
const forgotpassword = async (res, data, next) => {
    // Query user with provided data.
    const forgotPasswordUser = await User.findOne({data});

    if (!forgotPasswordUser){
        return next(new ErrorResponse("Email could not be sent.", 404));
    }

    // Generate resetToken for querried user
    // By: using in model methods
    const resetToken = forgotPasswordUser.getResetPasswordToken();

    // Update user after having resetToken
    await forgotPasswordUser.save();

    /**
     * Prepare: resetUrl, messages
     * SentTo: end-user's email
     */
    const resetUrl = process.env.RESET_URL + resetToken.toString();
    const message = `
        <h1>You have requested a password reset</h1>
        <p>Please go to this link to reset your password</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `

    try {
        await sendEmail({
            to:         forgotPasswordUser.email,
            subject:    "Password Reset Request",
            text:       message
        });

        res.status(200).json({
            success:    true,
            data:       "Email sent"
        })
    } catch (error) {
        forgotPasswordUser.resetPasswordToken   = undefined;
        forgotPasswordUser.resetPasswordExpire   = undefined;

        await forgotPasswordUser.save();

        return next(new ErrorResponse("Cannot forgot password", 500))
    }
}


/**
 * Resetpassword Service
 *
 * @param {Object} res
 * @param {Object} data - from Controller Layer
 * @param {Function} next
 *
 * @returns {String} resetPasswordToken
 */
const resetpassword = async (res, data,  next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(data.resetToken).digest("hex");

    // Query User has resetPassword Token
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if(!user){
        return next(new ErrorResponse("Invalid Reset TOken", 400));
    }

    /**
     * DEFINED newly updated password
     * RESET passwordToken & passwordExpire
     */
    user.password               = data.password;
    user.resetPasswordToken     = undefined;
    user.resetPasswordExpire    = undefined;

    // Update DB
    await user.save();

    // Notify process to end-user
    res.status(201).json({
        success:    true,
        message:    "Password Reset Success"
    })


    return resetPasswordToken;
}

/**
 *
 * @param {Object} user
 * @param {Number} statusCode
 * @param {Object} res
 *
 * @return {String} token
 */
 const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();

    res.status(statusCode).json({
        success:    true,
        token
    })
}

module.exports = {
    login,
    register,
    forgotpassword,
    resetpassword
}