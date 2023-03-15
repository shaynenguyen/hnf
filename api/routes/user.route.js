const express       = require('express');
const controller    = require('../controllers/user.controller');
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken');

// 2. Router configuration
const router        = express.Router();

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

module.exports = router;
