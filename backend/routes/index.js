var express = require('express');
var router = express.Router();
const colleges = require('../models/college');

for(var i= 0; i<10 ; i++){
  colleges.create({id:"abc"+i.toString(),name:"college001"+i.toString(),country:"America",state:"newyork"});
}
/* GET home page. */
router.get('/', function(req, res, next) {
  colleges.find({})
  .then((colleges)=>{
    res.json(colleges);
  })
});


module.exports = router;
