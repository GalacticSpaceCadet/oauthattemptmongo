//below are the authentication dependecies
var passport = require('passport');
var session = require('express-session');
var express = require('express');

 var app = express();
 




//required middle ware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//establishing connection dependency to the database
var mongoose = require('mongoose');

// *** mongoose *** //
mongoose.connect('mongodb://localhost/passport-social-auth');



