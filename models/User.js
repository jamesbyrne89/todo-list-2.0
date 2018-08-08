const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  joined: { type: Object, required: true },
  tasks: { type: Array, required: true }
});

module.exports = User = mongoose.model('user', UserSchema);
