const express               = require("express");
const bodyParser            = require("body-parser");
const projectController     = require("../Controllers/projectC");

// 1. Middleware configuration
const urlencodedParser      = bodyParser.urlencoded({ extended: false})

// 2. Router configuration
const router = express.Router();

// TO DO:
// Express-validator (optional)

// POST new project
router.post('/create',urlencodedParser, projectController.project_create);

router.get('/', (req, res) => {
    console.log("Project request!ß")
    res.redirect("/list")
    // TODO: redirect to /list automative.
})

// Retrieve whole Project in list
router.get('/list', projectController.project_list),

// Project Details
router.get('/:id', projectController.project_detail),

// DELETE selected project
router.delete('/:id', projectController.project_delete),

// EDIT selected project
router.put('/:id', projectController.project_edit),

// Find Next/Previous id
router.get('/:id/next', projectController.project_go_forward),
router.get('/:id/previous', projectController.project_go_backward)

module.exports = router;