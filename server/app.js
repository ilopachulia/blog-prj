const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const blogRouter = require('./routes/blogRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(cors());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
