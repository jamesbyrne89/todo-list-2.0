const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv'),
  tasks = require('./routes/api/tasks'),
  path = require('path');

const env = dotenv.config({ path: 'config/variables.env' });
const db = env.parsed.DATABASE;
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// BodyParser middleware
app.use(bodyParser.json());

// Connect mongoose to database
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('db connected', db))
  .catch(err => console.log('MongoDB error'));

// Use routes
app.use('/api/tasks', tasks);

app.get('/signin', (req, res) => {
  return res.json('Sign in here');
});

//Serve static assets if in production environment
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Define port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// Configure the local strategy for Passport
passport.use(
  'local-signup',
  new LocalStrategy(
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    (req, email, password, done) => {
      // asynchronous
      // User.findOne wont fire unless data is sent back
      process.nextTick(() => {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'email': email }, (err, user) => {
          // if there are any errors, return the error
          if (err) return done(err);

          // check to see if theres already a user with that email
          if (user) {
            return done(
              null,
              false,
              req.flash('signupMessage', 'That email is already taken.')
            );
          } else {
            // if there is no user with that email
            // create the user
            var newUser = new User();

            // set the user's local credentials
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);

            // save the user
            newUser.save(err => {
              if (err) throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }
  )
);

// Configure Passport authenticated session persistence

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
      done(err, user);
  });
});
