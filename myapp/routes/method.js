var express = require('express');
var router = express.Router();
var userDao = require('../util/userDao');

router.post('/search', function(req, res, next){
    userDao.search(req, res, next);
    // console.log(req.body);
    // res.send({
    //     status: 'success'
    // });
});

router.post('/add', function(req, res, next){
    userDao.add(req, res, next);
});

module.exports = router;
