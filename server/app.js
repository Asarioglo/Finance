var express 		= require('express');
var app 			= express();
var path 			= require('path');
var mongoose		= require('mongoose');
var passport		= require('passport');
var flash 			= require('connect-flash');

var favicon 		= require('serve-favicon');
var morgan 			= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');
var session 		= require('express-session');
var configDB 		= require('./config/database');

// configuration ==============================================================================

// mongoose.connect(configDB.url);
require('./config/passport.js')(passport);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// setup express
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// TODO: move the secret into an external config not to expose
app.use(session({secret: "secretsessionwordlooool"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes ====================================================================================
app.use(require("./routes/index.js")(app, passport));
app.use(require("./routes/users.js")(app, passport));

module.exports = app;
