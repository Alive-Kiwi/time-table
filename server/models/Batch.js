const mongoose = require("mongoose");

const BatchSchema = mongoose.Schema({
  name: { type: String }
});

const Batch = mongoose.model("Batch", BatchSchema);

module.exports = Batch;
