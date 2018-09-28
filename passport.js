const LocalStrategy = require('passport-local').Strategy,
  passport = require('passport'),
  User = require('./models/User');

function config(passport) {
  console.log('passport.js');
  // Configure Passport authenticated session persistence
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // Configure the local strategy for Passport
  passport.use(
    new LocalStrategy(function(username, password, done) {
      User.findOne({ username }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    })
  );
};

module.exports = config(passport);
