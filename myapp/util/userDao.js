var mysql = require('mysql');
var database = require('../conf/database');
//var userDao = require('../util/userDao');
var userSql = require('../dao/userSqlMap');

var pool = mysql.createPool(database.mysql);

var jsonWrite = function(res, result){
    if(result === undefined){
        res.json({
            code: 1,
            msg: 'error'
        });
    }
    else{
        res.json(result);
    }
};

module.exports = {
    add: function(req, res, next){
        pool.getConnection(function(err, conn){
            var user = req.body.user;
            var pwd = req.body.pwd;
            conn.query(userSql.insert, [user, pwd], function(err, result){
                if(result){
                    result = {
                        code: 200,
                        msg: 'success'
                    };
                }
                jsonWrite(res, result);
                conn.release();
            });
        });
    },
    search: function(req, res, next){
        pool.getConnection(function(err, conn){
            var user = req.body.user;
            var pwd = req.body.pwd;
            conn.query(userSql.queryById, user, function(err, result){
                if(result[0].username === user && result[0].password === pwd){
                    result = {
                        code: 200,
                        msg: 'right'
                    }
                }
                else{
                    result = {
                        code: 400,
                        msg: 'warn'
                    }
                }
                jsonWrite(res, result);
                conn.release();
            });
        });
    }
};