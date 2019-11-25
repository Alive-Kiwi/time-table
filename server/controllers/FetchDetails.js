const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Teacher = require('../models/Teacher');
const Room = require('../models/Room');
const Batch = require('../models/Batch');
const Subject = require('../models/Subject');

router.get('/all', (req, res) => {
  Promise.all([Teacher.find(), Subject.find(), Room.find(), Batch.find()])
    .then(values => {
      res.send({
        teachers: values[0],
        subjects: values[1],
        rooms: values[2],
        batches: values[3]
      });
    })
    .catch(err => console.log('err', err));
});

module.exports = {
  fetchDetailsRouter: router
};
