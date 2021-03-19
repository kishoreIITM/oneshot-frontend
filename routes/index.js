var express = require('express');
var router = express.Router();
const colleges = require('../models/college');

/* GET home page. */
router.get('/', function(req, res, next) {
  colleges.find({})
  .then((colleges)=>{
    res.json(colleges);
  })
});


module.exports = router;
