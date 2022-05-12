const Project = require('../models/projectM')

// Retrieve list projects in database
const get_list_projects = (req, res) => {
    Project.find()
        .then((result) => {
            // TODO: Fix display Date
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

module.exports = {
    get_list_projects
}