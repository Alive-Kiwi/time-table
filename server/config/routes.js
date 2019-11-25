const express = require('express');
const router = express.Router();

const { teacherRouter } = require('../controllers/Teacher');
const { subjectRouter } = require('../controllers/Subject');
const { roomRouter } = require('../controllers/Room');
const { batchRouter } = require('../controllers/Batch');
const { classDetailRouter } = require('../controllers/ClassDetail');
const { fetchDetailsRouter } = require('../controllers/FetchDetails');

router.use('/api/teacher', teacherRouter);
router.use('/api/subject', subjectRouter);
router.use('/api/room', roomRouter);
router.use('api/batch/', batchRouter);
router.use('/api/classDetail', classDetailRouter);
router.use('/api/fetchDetails', fetchDetailsRouter);

module.exports = {
  router
};
