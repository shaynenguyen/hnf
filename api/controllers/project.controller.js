/*
    In api/controllers/projectControllerR
*/
const { isValidId ,services }  = require('../services');
const projectService            = require('../services/project.service');

// List Project Controller
const getAllProjects = async (req, res) => {
    // Return Data from service layer
    try{
        const allProjects = await projectService.getAllProjects();
        services(res, allProjects);
    } catch(error){
        services(res, {error: error?.message || error },false)
    }
}

// Create Project Controller
const createOneProject = async (req, res) => {
    const { body } = req;

    // Check missing field
    if( !body.title ||
        !body.person ||
        !body.status ||
        !body.content ){

            // Return Error to client
            services(res, `One of following keys are missing in request body: 'title', 'person', 'content'`, false);
        }
    const newProject = {
        title:      body.title,
        person:     body.person,
        content:    body.content
    }

    // Return Data from service layer
    try{
        const createdProject = await projectService.createNewProject(newProject);
        services(res, createdProject);
    }catch(error){
        services(res, {error: error?.message || error },false)
    }

}

// View Project Controller
const getOneProject = async (req, res) => {
    const projectId = req.params.id;

    // Validate Params Id
    if(!isValidId(projectId)){
        services(res, projectId + " is not valid id",false)
    }else{
        // Valid Parameters
        try{
            const project = await projectService.getOneProject(projectId);
            services(res, project);
        }catch(error){
            services(res, {error: error?.message || error },false)
        }
    }
}

// Update Project Controller
const updateOneProject = async (req, res) => {
    const refId     = req.params.id;
    const { refData } = req.body;

    // TODO: Validate Project id
    if(!isValidId(refId)){
        services(res, refId + " is not valid id",false)
    }else{
        // TODO: Check body data
        if( refData.title && refData.person && refData.status && refData.content){
            services(res, "One of data body is missed, such: 'title','person','status', 'content'",false);
        }

        // Return Data from service layer
        try{
            // TODO: Pass to Service Layer
            const updatedProject = await projectService.updateOneProject(req.params.id, req.body);
            services(res, updatedProject);
        }catch(error){
            services(res, {error: error?.message || error },false)
        }
    }
}

// Delete Project Controller
const deleteOneProject = (req, res) => {
    const projectId = req.params.id;

    // Validate Params Id
    if(!isValidId(projectId)){
        services(res, projectId + " is not valid id",false)
    }else{
        // Return Data from service layer
        try{
            projectService.deleteOneProject(projectId);

            services(res, {message: "Project "+ projectId +" is removed !"})
        }catch(error){
            services(res, {error: error?.message || error },false)
        }
    }
}

// Forward One Project Controller
const forwardOneProject = async (req, res) => {
    const projectId = req.params.id;

    // Validate Params Id
    if(!isValidId(projectId)){
        services(res, projectId + " is not valid id",false)
    }else{
        // Return Data from service layer
        try{
            const nextProject = await projectService.forwardOneProject(projectId);

            services(res, nextProject)
        }catch(error){
            services(res, {error: error?.message || error },false)
        }
    }
}

// Backward One Project Controller
const backwardOneProject = async (req, res) => {
    const projectId = req.params.id;

    // Validate Params Id
    if(!isValidId(projectId)){
        services(res, projectId + " is not valid id",false)
    }else{
        // Return Data from service layer
        try{
            const backProject = await projectService.backwardOneProject(projectId);

            services(res, backProject)
        }catch(error){
            services(res, {error: error?.message || error },false)
        }
    }
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