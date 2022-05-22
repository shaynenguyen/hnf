const mongoose          = require('mongoose');

const projectSchema     = new mongoose.Schema({
    title: {
        type:       String,
        required:   true,
        unique:     true,
    },
    person: {
        type:       String,
        require:    true
    },
    status: {
        type:       String,
        default:    'ongoing'
    },
    content: {
        type:       String
    },
},{timestamps: true});

module.exports = mongoose.model("Project", projectSchema)