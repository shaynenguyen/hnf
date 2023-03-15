/*
    In api/controllers/authControllers
*/
const authServices      = require('../services/auth.service');
const ErrorResponse     = require('../utils/errorResponse');

// Register new user
const register = async (req, res, next) => {

    const { username, email, password } = req.body;

    // Check Email && Password Valid
    if( !email || !password || !username ){
        return next(new ErrorResponse("Please provide either username, email and password", 400));
    }

    try {
        await authServices.register(res, {username, email, password }, next )
    } catch (error){
        next(error)
    }
}

// Log user in
const login = async (req, res, next) => {
    const { email, password } = req.body;

    // Check Email && Password Valid
    if( !email || !password ){
        return next(new ErrorResponse("Please provide an email and password", 400));
    }

    try {
        await authServices.login(res, { email, password }, next)
    }catch(err){
        // services(res, { error: err?.message || err }, false)
        next(err)
    }
}

// User's profile
const user = async (req, res) => {

}

// Forgotten Password
const forgotPassword = async (req, res, next) => {
    const { email } = req.body;

    try{
        await authServices.forgotpassword(res, email, next);
    } catch(err){
        next(err)
    }
}

// Reset Password with Token
const resetPasswordWithToken = async (req, res, next) => {
    const resetToken    = req.params.resetToken;
    const password      = req.body.password

    try{
        await authServices.resetpassword(res, {resetToken, password} , next)
    } catch(err){
        next(err)
    }
}

// Sign user out
const logout = (req, res) => {
    console.log("SIGN USER OUT");
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
    register,
    login,
    user,
    logout,
    forgotPassword,
    resetPasswordWithToken
}