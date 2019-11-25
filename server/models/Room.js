const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
  name: { type: String }
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
