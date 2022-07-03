const jwt       = require('jsonwebtoken');
require('dotenv').config()


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token

    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{
            if(err){
                res.status(403).json("Token is not valid!");
            }
            req.user = user;
            next()
        })
    }else{
        return res.status(401).json("You are not authenticated!")
    }
};

// Verify As Admin & Valid User id
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not allowed to do this action.")
        }
    })
}

// Verify As Admin
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not Admin to perform this action.")
        }
    })
}

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyAdmin
}