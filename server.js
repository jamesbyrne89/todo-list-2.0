const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv'),
  tasks = require('./routes/api/tasks'),
  path = require('path'),
  passport = require('passport');

const env = dotenv.config({ path: 'config/variables.env' });
const db = env.parsed.DATABASE;
const app = express();

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
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}


app.use(passport.initialize());
app.use(passport.session());

// Define port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
