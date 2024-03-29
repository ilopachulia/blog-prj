const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const { BASE_PORT } = require('./utils/constants');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,

  })
  .then(() => console.log("DB is connected!"));

const port = process.env.PORT || BASE_PORT;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
