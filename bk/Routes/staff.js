const express           = require("express");
const staffController   = require("../Controllers/staffC")

const router = express.Router();

// RETRIEVE all staff in database
router.get('/list', staffController.staff_list),


module.exports = router;