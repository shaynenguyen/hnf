/*
    IN api/controllers/userControllers
*/
const CryptoJS                  = require('crypto-js');
const { isValidId, services }   = require('../services');
const userService               = require('../services/user.service');
require('dotenv').config();

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
    const deleteId = req.params.id;

    // Validate Params id
    if(!isValidId(deleteId)){
        services(res, deleteId + " is not valid", false)
    }else{
        // Pass Delete Id to Service layer
        try{
            userService.deleteUser(req.params.id);
            services(res, {message: "User with Id, " + deleteId + ", has removed!"})
        }catch(err){
            services(res, {error: err?.message || err}, false)
        }
    }
}

// Find user
const findUser = async (req, res) => {
    const targetId = req.params.id;

    // Validate params id
    if(!isValidId(targetId)){
        services(res, targetId + " is not valid", false)
    }else{
        // Pass Id to Service layer
        try{
            const findOut = await userService.findUser(targetId);
            services(res, findOut);
        }catch(err){
            services(res, {error: err?.message || err}, false)
        }
    }
}

// Find All user
const findAllUsers = async (req, res) => {
    /**
     * @query - "...?new=true"
     *
     * @return - last 5 add user if true
     */
    try{
        const query = req.query.new;
        const findAll = await userService.findAllUsers(query);

        if(findAll){
            services(res, findAll)
        }
    }catch(err){
        services(res, {error: err?.message || err}, false)
    }
}

// Statistics User
const statisticsUsers = async (req, res) => {
    try{
        const statsUser = await userService.statisticsUsers()
        services(res, statsUser )
    }catch(err){
        services(res, {error: err?.message || err}, false)
    }
}

module.exports = {
    usersdetails,
    deleteUser,
    findUser,
    findAllUsers,
    statisticsUsers
}