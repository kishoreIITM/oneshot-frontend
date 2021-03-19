var express = require('express');
var router = express.Router();
const colleges = require('../models/college');
const students = require('../models/students');


router.route('/:id')
.get((req,res,next)=>{
  students.findOne({id:req.params.id})
    .then(students=>{
        res.json({students:students})
    })

})

module.exports = router;