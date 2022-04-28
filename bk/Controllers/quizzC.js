const Quizz     = require('../Models/QuizzM');

// Get all quizzes in DB
const get_all_quizzes = (req, res) => {
    Quizz.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log({err})
        })
};

module.exports = {
    get_all_quizzes
}