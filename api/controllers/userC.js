const User          = require('../models/userM')

// User signup
const signup = (req, res) => {
    // TODO: signup new user
    console.log("Signup user.")
    res.send({data: 'signup'});
}

// User log-in
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
    signup,
    login,
    logout
}