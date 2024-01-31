const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: [true, 'blog should not be empty'],
  },
  clap: {
    type: Number,
    default: 0,
  },
  category: {
    type: [String],
    require: [true, 'category should be indicated'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  keywords: {
    type: [String],
  },
  imageCover: {
    type: String,
  },
  images: [String],
});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
