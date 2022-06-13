/*
    IN api/controllers/userControllers
*/
const { services }   = require('../services')
const userService               = require('../services/userService');

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
        type:       body.type,
        refId:      body.refId
    }
    try{
        const createUser = await userService.register(newUser);
        services(res, createUser)
    }catch(err){
        services(res, {error: err?.message || err }, false)
    }
}

// Log User In
const login = (req, res) => {
    //    TODO: log user in
    console.log("Login user.")
    res.send({data: 'login'});
}

// User log-out
const logout = (req, res) => {
    // TODO: logout user
    console.log("logout user")
}


module.exports = {
    register,
    login,
    logout
}