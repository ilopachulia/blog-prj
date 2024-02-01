const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Password should not be empty'],
    unique: [true, 'Already registered'],
  },
  password: {
    type: String,
    required: [true, 'Password should not be empty'],
  },
  email: {
    type: String,
    required: [true, 'Email should not be empty'],
    unique: [true, 'Already used'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Password should not be empty'],
    unique: [true, 'Already used'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
