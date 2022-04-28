const jwt       = require("jsonwebtoken")

// Verify token
const verify_token = (req, res, next) => {
    // Get auth header value
    const bearerHeader = 'dslhglwhe'
    try {
        const decoded = jwt.verify(req.body.token, process.env.JWT_SECRETKEY)
        req.userData = decode;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth Faild'
        })
    }
}


module.exports = {
    verify_token
}