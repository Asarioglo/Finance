var express = require('express');
var router = express.Router();

module.exports = function(app, passport) {
    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });
    router.get('/name', function(req, res, next){
        res.json({"name": "LOL"});
    });

    return router;
};
