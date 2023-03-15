const jwt               = require('jsonwebtoken');
const User              = require('../models/user.model');
const ErrorResponse     = require('../utils/errorResponse');
require('dotenv').config();

const protect = async (req, res, next) => {
    let token;

    /**
     * Checck in return header has field, named authorization
     * And started with "Bearer"
     *
     */
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }

    // Raise error when token is not valid.
    if( !token){
        return next(new ErrorResponse("Not authorized to access this route", 401))
    }

    try{
        // Decode token with secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find User in DB after finding out id.
        const user = await User.findById(decoded.id);

        if (!user){
            return next(new ErrorResponse("No user found with token id", 404));
        }

        // Asign query user to Request Object
        req.user = user;

        // Pass to the next middleware
        next();

    }catch(error){
        return next(new ErrorResponse("Not authorized to access this route", 401))
    }
}

module.exports = {
    protect
}