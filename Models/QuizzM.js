const mongoose      = require("mongoose");
const quizzSchema   = new mongoose.Schema({
    question: {
        type:       String,
        required:   true,
        unique:     true
    },
    answer: {
        type:       Number,
        required:   true
    },
    options: {
        type:       [String],
        required:   true
    },
    selected: {
        type:       String,
        default:    '',
    }
});

module.exports = mongoose.model("Quizz", quizzSchema);