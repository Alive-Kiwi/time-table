const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassDetailSchema = mongoose.Schema({
  day: { type: String },
  room: { type: Schema.Types.ObjectId, ref: 'Room' },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
  batch: { type: Schema.Types.ObjectId, ref: 'Batch' },
  start: { type: String },
  end: { type: String },
  classDetailType: { type: String },
  createdAt: { type: Date, default: Date.now() },
  allowCreation: { type: Boolean, default: true }
});

const ClassDetail = mongoose.model('Class', ClassDetailSchema);

module.exports = ClassDetail;
