var LocalStrategy = require("passport-local").Strategy;
var User = require("../app/models/user.js");

module.exports = function(passport) {
    passport.serializeUser = function(user, done) {
        done(null, user.id);
    };

    passport.deserializeUser = function(id, done) {
        User.findByid(id, function(err, user) {
            done(err, user);
        });
    };

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {
            process.nextTick(function() {
                User.findOne({"local.email": email}, function(err, user) {
                    if(err) {
                        return done(err);
                    }

                    if(user) {
                        return done(null, false, req.status(403).json({"message": "User Exists"}));
                    }

                    var newUser = new User();
                    user.local.email = email;
                    user.local.password = newUser.generateHash(password);

                    newUser.save(function(err) {
                        if(err) {
                            res.status(500).json({message: "Could not save user, internal error occurred"});
                            throw error;
                            return done(null, newUser);
                        }
                        res.status(200).json({message: "User signed up successfully"});
                    });
                });
            })
        })
    );
};