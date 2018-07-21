const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv'),
  tasks = require('./routes/api/tasks');

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

// Define port
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
