const mongoose      = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    title:  {
        type:       String,
        required:   true,
        unique:     true,
    },
    person:  {
        type:       String,
        require:    true
    },
    due:     {
        type:       Date,
        require:    true
    },
    status:         String,
    content:        String
});

module.exports = mongoose.model("Project", ProjectSchema);