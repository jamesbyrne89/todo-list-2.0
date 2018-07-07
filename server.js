const express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json())
