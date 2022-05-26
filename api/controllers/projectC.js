const Project   = require('../models/projectM')
const services  = require('../services');

// Retrieve list projects in database
const getAllProjects = (req, res) => {

    Project.find()
        .then((result) => {
            // TODO: Fix display Date
            services(res, result);
        })
        .catch((err) => services(res, err, false))
}

// Create new project
const createNewProject = async (req, res) => {
    var newProject = new Project({
                            title:      req.body.title,
                            person:     req.body.person,
                            content:    req.body.content
                        });

    // Save record
    await newProject.save((err, result) => {
        if (err){
            services(res, err, false)
        }else {
            services(res, result._id)
        }
    })
}

// View selected Project
const getOneProject = (req, res) => {
    let id  = req.params.id
    Project.findById(id)
        .then((result)  => services(res, result))
        .catch((err)    => services(res, err, false))
}

// Edit selected project
const updateOneProject = (req, res) => {
    let thisid          = req.params.id;
    const updatedValue  = {
            title:      req.body.title,
            person:     req.body.person,
            status:     req.body.status,
            content:    req.body.content
        }

    // Search in database
    Project.findByIdAndUpdate({_id: thisid}, updatedValue)
        .then(()  => {
            // TODO: Check if result is a list of more than two
            // Prevent un-updated Project
            Project.findOne(thisid)
                .then((result)  => services(res, result))
                .catch((err)    => services(res, err, false))
        })
        .catch((errors) => services(res, errors, false));
}

// Delete selected project
const deleteOneProject = (req, res) => {
    let targetid    = req.params.id

    // Query in database
    Project.findByIdAndDelete({_id: targetid})
        .then((result)  => services(res, { message: 'Project ' + result._id + ' is removed.'}))
        .catch((err)    => services(res, err, false))
}

// Forward project
const forwardOneProject = (req, res) => {
    Project.find({_id: {$gt: req.params.id}}).sort({_id: 1}).limit(1)
        .then((result)  => services(res, result[0]._id.toString()))
        .catch((err)    => services(res, err, false))
};

// BackWard project
const backwardOneProject = (req, res) => {
    Project.find({_id: {$lt: req.params.id}}).sort({_id: -1}).limit(1)
        .then((result)  => services(res, result[0]._id.toString()))
        .catch((err)    => services(res, err, false))
};

module.exports = {
    getAllProjects,
    createNewProject,
    getOneProject,
    updateOneProject,
    deleteOneProject,
    forwardOneProject,
    backwardOneProject
}