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
      console.log(username, password);
      User.findOne({ username }, (err, doc) => {
        if (err) {
          done(err);
        }
      });
    })
  );
};
