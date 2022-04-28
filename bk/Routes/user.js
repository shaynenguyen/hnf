const express       =   require("express");
const router        =   express.Router();

// 1. Load Dependencies
const controller    = require('../Controllers/userC');

// Register user signup
router.post('/signup', controller.signup)

// User login
router.post('/login', controller.login)

module.exports = router;