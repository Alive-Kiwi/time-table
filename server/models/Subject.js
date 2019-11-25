const mongoose = require("mongoose");

const SubjectSchema = mongoose.Schema({
  name: { type: String }
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;
