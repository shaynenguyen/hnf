/*
    IN api/controllers/userControllers
*/
const CryptoJS                  = require('crypto-js');
const { isValidId, services }   = require('../services');
const userService               = require('../services/userService');
require('dotenv').config();

// Register Controller
const register = async (req, res) => {
    // TODO: signup new user
    // console.log("Signup user.")
    const { body } = req;

    // Check missing field
    if( !body.username ||
        !body.email ||
        !body.password){

            // Return error
            services(res, `One of following keys are missing (username, email, password) !`,false);
    }

    // Move Data to service layer
    const newUser = {
        username:   body.username,
        email:      body.email,
        password:   body.password,
        // type:       body.type,
        // refId:      body.refId
    }
    try{
        const createUser = await userService.registerNewUser(newUser);
        services(res, createUser)
    }catch(err){
        services(res, {error: err?.message || err }, false)
    }
}

// Log User In
const login = async (req, res) => {
    //    TODO: log user in
    const queryUser = {
        email:   req.body.email,
        password:   req.body.password
    };
    try{
        const accessToken = await userService.login(queryUser);

        services(res, accessToken )
    }catch(err) {
        services(res, {error:  err?.message || err}, false)
    }
}

// User log-out
const logout = (req, res) => {
    // TODO: logout user
    console.log("logout user")
}

// User details
const usersdetails = async (req, res) => {
    // TODO: user's details
    const { body } = req;
    if(body.password){
        body.password = CryptoJS.AES.encrypt(
            body.password,
            process.env.CRYPTO_SECRET
        ).toString();
    }

    try{
        const returnUser = await userService.updateUser(req.params.id, body);
        services(res, returnUser );
    }catch(err) {
        services(res, {error: err?.message || err}, false)
    }
}

// Delete user
const deleteUser = (req, res) => {
    // TODO: delete user
    try{

    }catch(err){
        services(res, {error: err?.message || err}, false)
    }

}

module.exports = {
    register,
    login,
    logout,
    usersdetails,
    deleteUser
}