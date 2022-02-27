const Staff = require("../Models/staffM");

// List all staff
const staff_list = (req, res) => {
    Staff.find()
        .then((result) => {
            const data = []
            result.forEach((staff) => {
                data.push(staff.first_name + ' ' + staff.last_name);
            })
            // console.log(data);
            res.send(data);
        })
        .catch((err) => {
            console.log("Error Staff: " + err);
        })
};

module.exports = {
    staff_list
}