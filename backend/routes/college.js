var express = require('express');
var router = express.Router();
const colleges = require('../models/college');
const students = require('../models/students');


router.route('/:name')
.get((req,res,next)=>{
  colleges.findOne({name:req.params.name})
  .then(college=>{
    students.find({college:college.name})
    .then(students=>{
        console.log(students)
        colleges.find({state:college.state})
        .then((simcollege)=>{
            res.json({college:college,students:students,simcollege:simcollege})
        })
    })
    
  })
})

module.exports = router;