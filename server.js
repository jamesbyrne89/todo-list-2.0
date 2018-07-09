const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv'),
  tasks = require('./routes/api/tasks');

const env = dotenv.config({ path: 'config/variables.env' });

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

const db = env.parsed.DATABASE;

// Connect mongoose to database
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('db connected'))
  .catch(err => console.log(err));

// Use routes
app.use('./routes/api', tasks)

  // Define port
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
