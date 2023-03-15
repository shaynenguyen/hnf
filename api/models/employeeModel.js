const mongoose          = require('mongoose');

const employeeSchema    = new mongoose.Schema({
    firstName:  {
        type:       String,
        require:    true,
    },
    lastName:   {
        type:       String,
        require:    true,
    },
    dob:        {
        type:       String,
        require:    true,
    },
    gender:     {
        type:       String,
        require:    true,
        default:    'female'
    },
    address:    {
        type:       String,
        require:    true,
    },
    startDate:  {
        type:       String,
        require:    true
    },
    contractType:   {
        type:       String,
        required:   true,
        default:    'internship'
    },
    tfn:    {
        type:       String,
    },
    availability:  {
        type:       Array,
        default:    []
    }

}, { timestamps: true})

module.exports = mongoose.model('Employee', employeeSchema)