const mongoose = require('mongoose');

// configure mongoose to use global promises
mongoose.Promise = global.Promise;

// establish a database connection
mongoose
  .connect('mongodb://shreedhar:shree1996@ds117093.mlab.com:17093/timetable', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(function() {
    console.log('connected to db');
  })
  .catch(function(err) {
    console.log('error connecting to db', err);
  });

module.exports = {
  mongoose
};
