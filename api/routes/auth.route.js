const express       = require('express');
const passport      = require('passport');

const controller    = require('../controllers/auth.controller')

// 2. Router configuration
const router        = express.Router();

// 3. Specific route
// ====================

// Register
router.post('/register', controller.register);

// Login
router.post('/login', controller.login);

// Redirect local login
router.get('/user', controller.user)

// signout
router.post('/logout', controller.logout)

// forgotPassword
router.post('/forgotpassword', controller.forgotPassword);

// reset password
router.put('/resetpassword/:resetToken', controller.resetPasswordWithToken)

/*
* Authenticate with Google Plus API
*/
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}))

// Callback Route for google to redirect.
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {

})

module.exports = router;
