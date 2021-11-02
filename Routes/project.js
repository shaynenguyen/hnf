const express               = require("express");
const projectController     = require("../Controllers/projectC");

const router = express.Router();

// POST new project
router.post('/create', projectController.project_create);

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