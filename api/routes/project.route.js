const express           = require('express')
const bodyParser        = require("body-parser");

const controller        = require('../controllers/project.controller');

// 1. Middleware configuration
const urlencodedParser      = bodyParser.urlencoded({ extended: false})

// 2. Router configuration
const router        = express.Router();


router.get('/', (req, res) => {
    res.redirect("/project/list-all")
    // TODO: redirect to /list automative.
})

// List Project Route
router.get('/list-all', controller.getAllProjects)

// Create Project Route
router.post('/create' ,urlencodedParser ,controller.createOneProject)

// View Project Route
router.get('/:id', controller.getOneProject)

// Edit Project Route
router.patch('/:id' ,urlencodedParser, controller.updateOneProject)

// Delete Project Route
router.delete('/:id', controller.deleteOneProject)

// Forward One Project Route
router.get('/:id/next', controller.forwardOneProject)

// Backward One Project Route
router.get('/:id/back', controller.backwardOneProject)

module.exports = router;
