const mongoose = require('mongoose');
const schema = mongoose.Schema;

const details = new schema({
    id: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    founded: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    students: {
        type: Number
    },
    courses:[String]
},{timestamps:true});

const colleges = mongoose.model('colleges',details);
module.exports = colleges;
