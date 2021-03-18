const mongoose = require('mongoose');
const schema = mongoose.Schema;

const details = new schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    batch: {
        type: String
    },
    college: {
        type: String
    },
    skills:[String]
},{timestamps:true});

const students = mongoose.model('students',details);
module.exports = students;
