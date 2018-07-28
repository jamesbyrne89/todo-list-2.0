const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv'),
  tasks = require('./routes/api/tasks'),
  path = require('path');

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

//Serve static assets if in production environment
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Define port
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
