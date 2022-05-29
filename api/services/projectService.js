/*
    IN api/services/projectService
*/
const Project = require('../models/projectM');

// Retrieve list projects in database
const getAllProjects = () => {

    // Solution: https://stackoverflow.com/questions/41896865/proper-error-handling-in-mongoose-query-exec
    return Project.find().exec().then(function (result) {
                                    // handle success
                                    return result;
                                })
                                .catch(function(err){
                                    // handle error
                                    return err;
                                });
}

// Create New Project
const createNewProject = (newProject) => {
    const projectToInsert = new Project({
                                    title:      newProject.title,
                                    person:     newProject.person,
                                    status:     newProject.status,
                                    content:    newProject.content
                                })

    // Save New Project to DB
    // Solution: https://stackoverflow.com/questions/29736965/mongoose-error-on-promise-with-save
    return projectToInsert.save()
                    .then((result) => {
                        return result._id;
                    })
                    .catch((err) => {
                        return err;
                    });
}

// View One Project
const getOneProject = (targetId) => {
    return Project.findOne({_id: targetId}).exec()
                    .then((result) => {
                        return result;
                    })
                    .catch((err) => {
                        return err;
                    });;
}

// Update One Project
const updateOneProject = (targetId, dataValue) => {
    return Project.findByIdAndUpdate({_id: targetId},dataValue)
                    .then(() => {
                        // TODO: Check if result is a list of more than two
                        // Prevent un-updated Project
                        return Project.findOne({_id: targetId}).exec()
                                    .then((resultOne) => {
                                        // handle success
                                        return resultOne;
                                    })
                                    .catch((err) => {
                                        // handle error
                                        return err;
                                    })
                    })
                    .catch((error) => {
                        // handle cannot find & update Id
                        return error;
                    });
}

// Delete One Project
const deleteOneProject = (targetId) => {
    return Project.findByIdAndDelete({_id: targetId}).exec();
}

// Forward One Project
const forwardOneProject = (targetId) => {
    return Project.find({_id: {$gt: targetId}}).sort({_id: 1}).limit(1).exec()
                    .then((result) => {
                        return result[0]._id;
                    })
                    .catch((err) => {
                        return err;
                    });
}

// Backward One Project
const backwardOneProject = (targetId) => {
    return Project.find({_id: {$lt: targetId}}).sort({_id: -1}).limit(1).exec()
                    .then((result) => {
                        return result[0]._id;
                    })
                    .catch((err) => {
                        return err;
                    });
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
