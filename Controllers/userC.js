const bcrypt        =   require("bcrypt");
const mongoose      =   require("mongoose");
const jwt           =   require("jsonwebtoken");

// Load Dependencies
const User          = require('../Models/UserM');

// Signup new User
const signup = (req, res, next) => {
    // Check username is unique
    User.find({ email: req.body.email})
        .exec()
        .then(user => {
            if(user.length >= 1){
                return res.status(409).json({
                    message: 'Mail exists'
                });
            } else {
                bcrypt.hash(req.body.password, process.env.BCRYPT_SALT, (err, hash) => {
                    if(err){
                        res.status(500).json({err})
                    } else {
                        const user = new User({
                            username: req.body.username,
                            password: hash
                        })

                        user
                            .save()
                            .then(result => {
                                res.status(201).json({
                                    message: 'User Created'
                                });
                            })
                            .catch(err => {
                                res.status(500).json({err})
                            })
                    }
                })
            }
        })
}

// Login user
const login = (req, res, next) => {
    User.find({email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth Failed'
                });
            }else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth Failed'
                        })
                    }

                    if (result) {
                        // Authentication token
                        const authToken = jwt.sign({
                            email:      user[0].email,
                            userId:     user[0]._id
                        },
                        process.env.JWT_SECRETKEY,
                        {
                            expiredIn: process.env.JWT_EXPIRED
                        });

                        return res.status(200).json({
                            message: 'Auth successful',
                            token:  authToken
                        })
                    }

                    res.status(401).json({
                        message: 'Auth Failed'
                    })
                })
            }
        })
        .catch(err => {
            console.log({err})
            res.status(500).json({err})
        })
}

module.exports = {
    signup,
    login
}