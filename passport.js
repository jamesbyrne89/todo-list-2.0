const LocalStrategy = require('passport-local').Strategy,
  passport = require('passport'),
  User = require('./models/User');

function config(passport) {
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
    new LocalStrategy(
      {
        // or whatever you want to use
        usernameField: 'email', // define the parameter in req.body that passport can use as username and password
        passwordField: 'password'
      },
      function(username, password, done) {
        User.findOne({ email: username }, function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.comparePasswords(password, user.password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }
    )
  );
}

module.exports = config(passport);
