const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv');

const env = dotenv.config({ path: 'config/variables.env' });

const app = express();

app.use(bodyParser.json());

const db = env.DATABASE;
console.log(env.DATABASE)

// Connect mongoose to database
// mongoose.connect(db).then(()=> console.log('db connected'));
