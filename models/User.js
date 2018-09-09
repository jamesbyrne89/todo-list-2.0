const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'Please enter your first name'
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Please enter your last name'
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    validate: [
      validator.isEmail,
      `That doesn't appear to be a valid email address`
    ],
    required: 'Please provide an email address'
  },
  joined: { type: Object, required: true },
  tasks: { type: Array, required: true }
});

module.exports = User = mongoose.model('user', UserSchema);
