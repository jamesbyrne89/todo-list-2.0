const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
  name: { type: String, required: true },
  completed: {
    type: Boolean,
    required: true
  }
});
