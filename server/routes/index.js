var express = require('express');
var router = express.Router();
var site = require("./site");

module.exports = function(app, passport) {
    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });
    router.get('/name', function(req, res, next){
        res.json({"name": "LOL"});
    });
    router.get('/api/info/familylist', site.familyList);

    return router;
};
