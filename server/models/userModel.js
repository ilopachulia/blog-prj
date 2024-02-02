const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Password should not be empty'],
    unique: [true, 'Already registered'],
  },
  password: {
    type: String,
    required: [true, 'Password should not be empty'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please Confirm the password'],
    validate: {
      // This only works on CREATE & SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  email: {
    type: String,
    required: [true, 'Email should not be empty'],
    unique: [true, 'Already used'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Password should not be empty'],
    unique: [true, 'Already used'],
  },
  photo: String,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
