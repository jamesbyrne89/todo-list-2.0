const express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
dotenv = require ('dotenv')


const env = dotenv.config({path: 'variables.env'});

const app = express();

app.use(bodyParser.json())

const db = env.DATABASE;
