const mongoose      = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    Title:          String,
    Person:         String,
    Person:         String,
    Due:            Date,
    Status:         String,
    Content:        String
});

module.exports = mongoose.model("Project", ProjectSchema);