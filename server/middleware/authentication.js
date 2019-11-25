const ClassDetail = require('../models/ClassDetail');
const mongoose = require('mongoose');
const moment = require('moment');
// mongoose.Collection.f;
const classExists = function(req, res, next) {
  const allowCreation = req.body.allowCreation;
  ClassDetail.find(allowCreation).then(ClassSchedules => {
    ClassSchedules.map(ClassSchedule => {
      if (ClassSchedule.teacher.name === req.body.teacher.name) {
        const aasignedTimeStart = moment.utc(ClassSchedule.start, 'HH:mm A');
        const aasignedTimeEnd = moment.utc(ClassSchedule.end, 'HH:mm A');
        const toBeAasignedTimeStart = moment.utc(req.body.start);
        const toBeAasignedTimeEnd = moment.utc(req.body.end);

        // console.log(aasignedTimeStart);
        // console.log(aasignedTimeEnd);
        // console.log(toBeAasignedTimeStart);
        // console.log(toBeAasignedTimeEnd);
        if (
          toBeAasignedTimeStart.isSameOrAfter(aasignedTimeStart) &&
          toBeAasignedTimeEnd.isSameOrBefore(aasignedTimeEnd)
        ) {
          res.send({ message: 'Teacher is already assigned for given time' });
        } else {
          next();
        }
      }
    });
  });
};

module.exports = {
  classExists
};
