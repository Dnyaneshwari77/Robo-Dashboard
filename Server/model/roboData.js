const mongoose = require("mongoose");

const robotSchema = new mongoose.Schema({
  robot_id: { type: String, required: true },
  battery_level: { type: Number, required: true },
  operational_status: { type: String, required: true },
  logs: [{ timestamp: Date, message: String }],
  idle_to_active_transitions: { type: Number },
  active_to_idle_transitions: { type: Number },
});

const Robot = mongoose.model("Robot", robotSchema);

module.exports = Robot;
