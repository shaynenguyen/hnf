const express           = require('express');
const controller        = require('../controllers/userControllers');

const router            = express.Router();

// Singup Route
router.get('/signup', controller.signup);

// Login Route
router.get('/login', controller.login);

// Logout Route
router.get('/logout', controller.logout)

module.exports = router;
