const express           = require('express')
const bodyParser        = require("body-parser");

const controller        = require('../controllers/projectC');

// 1. Middleware configuration
const urlencodedParser      = bodyParser.urlencoded({ extended: false})

// 2. Router configuration
const router        = express.Router();


router.get('/', (req, res) => {
    res.redirect("/project/list-all")
    // TODO: redirect to /list automative.
})

// Retreving all projects
router.get('/list-all', controller.get_list_projects)

// Create Project
router.post('/create' ,urlencodedParser ,controller.create_new_project)

// View Project
router.get('/:id', controller.project_detail)

// Edit Project
router.put('/:id' ,urlencodedParser, controller.edit_project)

// Delete Project
router.delete('/:id', controller.delete_project)

module.exports = router;
