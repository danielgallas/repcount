const mongoose = require("mongoose");

const repsSchema = new mongoose.Schema({
  date: { type: String },
  reps: { type: String },
});

module.exports = mongoose.model("Reps", repsSchema);
