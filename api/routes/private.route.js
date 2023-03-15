const express       = require('express');
const controller    = require('../controllers/private.controller');
const middleware    = require('../middleware/auth.middleware');
const router        = express.Router();

router.get('/', middleware.protect , controller.getPrivateData);

module.exports = router;