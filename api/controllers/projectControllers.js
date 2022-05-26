/*
    In api/controllers/projectControllerR
*/
const projectService = require('../services/projectService');

// List Project Controller
const getAllProjects = async (req, res) => {
    const allProjects = await projectService.getAllProjects();
    res.send({status: 'success', data: allProjects })
}

// Create Project Controller
const createOneProject = async (req, res) => {
    const { body } = req;

    // Check missing field
    if( !body.title ||
        !body.person ||
        !body.content ){
            return;
        }
    const newProject = {
        title:      body.title,
        person:     body.person,
        content:    body.content
    }
    const createProject = await projectService.createNewProject(newProject);

    res.status(201).send({status: "success", data: createProject._id});
}

// View Project Controller
const getOneProject = async (req, res) => {
    const project = await projectService.getOneProject(req.params.id);

    res.status(201).send({status: "success", data: project});
}

// Update Project Controller
const updateOneProject = async (req, res) => {
    const updateProject = await projectService.updateOneProject(req.params.id, req.body);

    res.status(201).send({status: "success", data: updateProject});
}

// Delete Project Controller
const deleteOneProject = (req, res) => {
    projectService.deleteOneProject(req.params.id);

    res.status(201).send({status: "success", message: "Project "+ req.params.id +" is removed !"});
}

// Forward One Project Controller
const forwardOneProject = async (req, res) => {
    const nextProject = await projectService.forwardOneProject(req.params.id);

    res.status(201).send({status: "success", data: nextProject[0]._id})
}

// Backward One Project Controller
const backwardOneProject = async (req, res) => {
    const backProject = await projectService.backwardOneProject(req.params.id);

    res.status(201).send({status: "success", data: backProject[0]._id})
}

module.exports = {
    getAllProjects,
    createOneProject,
    getOneProject,
    updateOneProject,
    deleteOneProject,
    forwardOneProject,
    backwardOneProject
}