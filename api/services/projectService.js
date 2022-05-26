/*
    IN api/services/projectService
*/
const Project = require('../models/projectM');

// Retrieve list projects in database
const getAllProjects = () => {
    return Project.find().exec();
}

// Create New Project
const createNewProject = (newProject) => {
    const projectToInsert = new Project({
                                    title:      newProject.title,
                                    person:     newProject.person,
                                    content:    newProject.content
                                })

    // Save New Project to DB
    // Solution: https://stackoverflow.com/questions/29736965/mongoose-error-on-promise-with-save
    return projectToInsert.save().then().catch();
}

// View One Project
const getOneProject = (targetId) => {
    return Project.findOne({_id: targetId}).exec();
}

// Update One Project
const updateOneProject = (targetId, dataValue) => {
    return Project.findByIdAndUpdate({_id: targetId},dataValue)
                    .then(() => {
                        // TODO: Check if result is a list of more than two
                        // Prevent un-updated Project
                        return Project.findOne({_id: targetId})
                                    .then()
                                    .catch()
                    })
                    .catch();
}

// Delete One Project
const deleteOneProject = (targetId) => {
    return Project.findByIdAndDelete({_id: targetId}).exec();
}

// Forward One Project
const forwardOneProject = (targetId) => {
    console.log({targetId})
    return Project.find({_id: {$gt: targetId}}).sort({_id: 1}).limit(1)
                    .then()
                    .catch();
}

// Backward One Project
const backwardOneProject = (targetId) => {
    return Project.find({_id: {$lt: targetId}}).sort({_id: -1}).limit(1)
                .then()
                .catch();
}

module.exports = {
    getAllProjects,
    createNewProject,
    getOneProject,
    updateOneProject,
    deleteOneProject,
    forwardOneProject,
    backwardOneProject
}
