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
const Strategy = require('passport-local').Strategy;

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
  new Strategy((username, password, cb) => {
    db.users.findByUsername(username, (err, user) => {
      err ? cb(err) : cb(null, false);
      if (user.password !== password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);
// Configure Passport authenticated session persistence

passport.serializeUser((id, cb) => {
  db.users.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});
