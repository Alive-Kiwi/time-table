const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
  name: { type: String }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
