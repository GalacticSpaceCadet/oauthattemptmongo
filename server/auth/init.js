//serialize and deserialize user instances from a session
// to store to support login session

var passport = require('passport');
var User = require('../models/user');


module.exports = function() {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

};

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});