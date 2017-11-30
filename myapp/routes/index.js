var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('./public/hello');
  res.sendFile('public/hello.html', { root: process.cwd() });
});

module.exports = router;
