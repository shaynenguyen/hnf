const express       = require('express');
const passport      = require('passport');
const controller    = require('../controllers/userControllers');

const router = express.Router();

// Register Route
router.post('/register', controller.register)

// Login Route
router.get('/login', (req, res) => {
    res.send('Login User');
})

// Logout Route
router.get('/logout', (req, res) =>{
    res.send('Log user out.')
})

/*
Authenticate with Google Plus API
=================================
*/
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}))

// Callback Route for google to redirect.
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {

})



module.exports = router
