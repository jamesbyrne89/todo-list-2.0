const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
  name: { type: String, required: true },
  deadline: {
    type: Date,
    required: false
  },
  completed: {
    type: Boolean,
    required: true
  }
});
