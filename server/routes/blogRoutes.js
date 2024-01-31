const express = require('express');
const blogController = require('./../controllers/blogController');

const router = express.Router();


router.route('/blog-stats').get(blogController.getBlogStats)
// router.route('/monthly-plan').get(blogController.getMonthlyPlan)


router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);
router
  .route('/:id')
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
