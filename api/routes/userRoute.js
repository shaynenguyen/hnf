const express       = require('express');
const passport      = require('passport');
const controller    = require('../controllers/userControllers');
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken');

// 2. Router configuration
const router = express.Router();

// Register Route
router.post('/register', controller.register)

// Login Route
router.post('/login', controller.login)

// Logout Route
router.get('/logout', (req, res) =>{
    res.send('Log user out.')
})

// Update Route
router.put('/:id', verifyTokenAndAuthorization, controller.usersdetails)

// Delete Route
router.delete('/:id', verifyTokenAndAuthorization, controller.deleteUser)

// Find User Route
router.get('/find/:id', verifyTokenAndAuthorization, controller.findUser)

// Find All User Route
router.get('/findalluser', verifyTokenAndAuthorization, controller.findAllUsers)

// Statistics User Route
router.get('/stats', verifyTokenAndAuthorization, controller.statisticsUsers)

/*
* Authenticate with Google Plus API
*/
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}))

// Callback Route for google to redirect.
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {

})



module.exports = router
