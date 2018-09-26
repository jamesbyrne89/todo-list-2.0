const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
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
    'local-signup',
    new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },(username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          let valid = user.comparePassword(password, user.password);
          if (valid) {
            done(null, user);
          } else {
            done(null, false, { message: 'Incorrect password.' });
          }
        } else {
          done(null, false, { message: 'No user found' });
        }
      });
    })
  );
};
