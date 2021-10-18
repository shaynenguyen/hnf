const Messages = require("../Models/Message");

module.exports = function(app){
    // Retrieve all messages
    app.get('/message', (req, res) => {
        Messages.find()
            .then((result) => {
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            })
    })

    // Add message to team

    // Edit messge and send to the team

    // Delete recent message to the team
}