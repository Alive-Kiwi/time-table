const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const momemt = require('moment');
const ClassDetail = require('../models/ClassDetail');

const { classExists } = require('../middleware/authentication');

router.get('/', (req, res) => {
  ClassDetail.find()
    .populate('teacher')
    .populate('subject')
    .populate('room')
    .populate('batch')
    .then(classdetail => res.send(classdetail));
});

router.post('/', classExists, (req, res) => {
  let { teacher, from, to, day, subject } = req.body;

  req.body.start = momemt.utc(req.body.start).format('HH:mm A');
  req.body.end = momemt.utc(req.body.end).format('HH:mm: A');

  const classdetail = new ClassDetail(req.body);
  classdetail
    .save()
    .then(classdetail =>
      res.send({ classdetail: classdetail, message: 'success' })
    );

  console.log(req.body);
});

// router.post('/', (req, res) => {
//   let { teacher, from, to, day, subject } = req.body;

//   req.body.start = momemt.utc(req.body.start).format('HH:mm A');
//   req.body.end = momemt.utc(req.body.end).format('HH:mm: A');

//   const classdetail = new ClassDetail(req.body);
//   classdetail
//     .save()
//     .then(classdetail =>
//       res.send({ classdetail: classdetail, message: 'success' })
//     );

//   console.log(req.body);
// });

router.put('/:id', (req, res) => {
  console.log('body', req.body);
});

router.delete('/:_id', (req, res) => {
  const _id = req.params._id;
  ClassDetail.findOneAndDelete(_id).then(record => {
    res.send(record);
  });
});

module.exports = {
  classDetailRouter: router
};
