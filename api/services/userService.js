/*
    IN api/services/userService
*/
const CryptoJS  = require('crypto-js');
const jwt       = require('jsonwebtoken');
const User      = require('../models/userModel');
require('dotenv').config();

// Create New User
const registerNewUser = (newUser) => {
    const userToInsert = new User({
        username:   newUser.username,
        email:      newUser.email,
        password:   CryptoJS.AES.encrypt(newUser.password, process.env.CRYPTO_SECRET).toString(),
        // type:       newUser.type,
        // refId:      newUser.refId,
    })

    // Save New User to DB
    return userToInsert.save()
                    .then((result) => {
                        // return result._id;
                        return result;
                    })
                    .catch((err) => {
                        return err;
                    });
}

// Login
const login = (loginUser) => {
    return User.findOne({email: loginUser.email})
                .then((result) => {
                    if(!result){
                        return 'Wrong Credentials !';
                    }

                    // De-crypto Password
                    const bytes =  CryptoJS.AES.decrypt(result.password, process.env.CRYPTO_SECRET);
                    const originPassword = bytes.toString(CryptoJS.enc.Utf8);

                    // Check Matched Password
                    if(originPassword.localeCompare(loginUser.password)){
                        return 'Wrong Credentials!';
                    };

                    // Access Token with JWT
                    const accessToken = jwt.sign({
                                            id: result._id
                                        },
                                        process.env.JWT_SECRET,
                                        {
                                            expiresIn: "1d"
                                        });

                    const { password, ...others } = result._doc;
                    return {...others, accessToken };
                })
                .catch((err) => {
                    return err;
                })
}

// Update User's details
const updateUser = (targetId, targetUser) => {
    return User.findByIdAndUpdate(
        targetId,
        {
            $set: targetUser,
        },
        { new: true }
        )
}

module.exports = {
    registerNewUser,
    login,
    updateUser
}