var express = require('express');
var router = express.Router();

module.exports = function(app, passport) {
    /* GET users listing. */
    router.post('/signup', function(req, res, next) {
      console.log(req.body);
      next();
    },
        passport.authenticate('local-signup', function(err, user, info) {
      console.log(err);
      console.log(user);
      console.log(info);
    }));
    return router;
};
