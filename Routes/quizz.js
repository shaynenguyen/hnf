const express       = require('express');
const controller    = require('../Controllers/quizzC');

const router        = express.Router();

// List Quizz
router.get('/list', controller.get_all_quizzes)

module.exports = router;