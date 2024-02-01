const Blog = require('./../models/blogModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAllBlogs = async (req, res) => {
  try {
    const features = new APIFeatures(Blog.find(), req.query)
      .filter()
      .limitFields()
      .paginate();

    const blogs = await features.query;

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      result: blogs.length,
      data: blogs,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getBlog = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  res.status(200).json({
    status: 'success',
    data: blog,
  });
};

exports.createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newBlog,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: blog,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};


exports.getBlogStats = async (req, res) => {
  try {
    const stats = await Blog.aggregate([
      { $match: { claps: { $gte: 6 } } },
      {
        $group: {
          _id: null,
          clap: { $avg: '$clap' },
        },
      },
    ]);
    res.status(200).json({
      status: 'success',
      data: stats,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// should be implemented in users model
// exports.getMonthlyPlan = async(req,res)=> {
//   try {
//     const year = req.params.year * 1;
//     const plan = await Blog.aggregate([
//
//     ]);
//     res.status(200).json({
//       status: 'success',
//       data: plan,
//     });
//
//   } catch (err) {
//     res.status(404).json({
//       status: 'failed',
//       message: err.message,
//     });
//   }
// }
