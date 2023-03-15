// IN middleware/errorHandler.js

/**
 * Dependencies
 */
const ErrorResponse = require('../utils/errorResponse');

/**
 *
 * @param {Error}       error
 * @param {Request}     req
 * @param {Response}    res
 * @param {Next}        next
 */
function errorHandler(err, req, res, next){
    let error = { ...err };

    error.message = err.message;

    // Handler mongoose duplicate key
    if (err.code === 11000){
        const message   = "Duplicate Field Value Enter";
        error           = new ErrorResponse(message, 400);
    }

    // Handle Validation Error
    if (err.name === "ValidationError"){
        const message   = Object.values(err.errors).map((val) =>  val.message);
        error           = new ErrorResponse(message, 400)
    }

    // Handle with statuscode
    res.status(error.statusCode || 500 ).json({
        success:    false,
        error:      error.message || "Server Error",
    });

};

module.exports = errorHandler;
