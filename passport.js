const passport = require('passport');
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
    new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, doc) => {
        if (err) {
          return done(err);
        }
        if (doc) {
          let valid = doc.comparePassword(password, doc.password);
          if (valid) {
            done(null, {
              username: doc.username,
              password: doc.password
            });
          } else {
            done(null, false);
          }
        } else {
          done(null, false);
        }
      });
    })
  );
};
