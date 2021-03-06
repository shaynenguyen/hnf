const Project = require("../Models/ProjectM");

// Project Details Controller
const project_detail = (req, res) => {
    Project.findById(req.params.id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
};

// List all projects in database
const project_list = (req, res) => {
    Project.find()
        .then((result) => {
            // TODO: Fix display Date

            let options = { year: "numeric", month: "short", day: "numeric"};
            // console.log((new Date(Date.parse(result[0].due))).toLocaleDateString('en-us', options));

            res.send(result);
        })
        .catch((err) => {
            console.log("Errors Project: " + err)
        })
};

// project creation
const project_create = async (req, res) => {
    var newProject = new Project(req.body);
    // TODO:
    // - verification server side

    console.log(newProject);
    // await newProject.save()
    //     .then((result) => {
    //         res.redirect('/list')
    //     })
    //     .catch((err) => {
    //         console.log(err)
        // })
};

// project deletion
const project_delete = (req, res) => {
    console.log("DELETE project with id: " + req.params.id);

    Project.findByIdAndDelete({_id: req.params.id })
        .then(result => {
            res.json({ redirect: '/list'});
        })
        .catch(err => {
            console.log(err);
        })
};

// project edit
const project_edit = (req, res) => {
    console.log("EDIT project id: " + req.params.id);

    Project.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(result => {
            // Re-find the recent updated project.
            Project.findOne(req.params.id)
                .then(result => {
                    res.send(result)
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err);
        })
};

// forward project
const project_go_forward = (req, res) => {
    Project.find({_id: {$gt: req.params.id}}).sort({_id: 1}).limit(1)
        .then((result) => {
            res.send(result[0]._id.toString())
        })
        .catch((err) => {
            console.log(err)
        })
};

// backward project
const project_go_backward = (req, res) => {
    Project.find({_id: {$lt: req.params.id}}).sort({_id: -1}).limit(1)
        .then((result) => {
            res.send(result[0]._id.toString())
        })
        .catch((err) => {
            console.log(err)
        })
};

module.exports = {
    project_detail,
    project_list,
    project_create,
    project_delete,
    project_edit,
    project_go_forward,
    project_go_backward
}