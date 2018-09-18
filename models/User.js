const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcrypt-nodejs');

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

UserSchema.methods.hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePasswordS = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = User = mongoose.model('user', UserSchema);
