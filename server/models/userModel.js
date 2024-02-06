const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name should not be empty'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email should not be empty'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
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

  photo: String,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
try {
  this.password = await bcrypt.hash(this.password, 12);
}catch(err) {
  console.log(err)
}

  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  try {
    return await bcrypt.compare(candidatePassword, userPassword);
  } catch(err){
    console.log(err)
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
