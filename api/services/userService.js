/*
    IN api/services/userService
*/
const User = require('../models/userModel');

// Create New User
const createNewUser = (newUser) => {
    const userToInsert = new User({
        username:   newUser.username,
        email:      newUser.email,
        password:   newUser.password,
        type:       newUser.type,
        refId:      newUser.refId,
    })

    // Save New User to DB
    return userToInsert.save()
                    .then((result) => {
                        return result._id;
                    })
                    .catch((err) => {
                        return err;
                    });
}

module.exports = {
    createNewUser
}