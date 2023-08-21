const mongoose = require("mongoose");

const repsSchema = new mongoose.Schema({
  date: { type: Date },
  reps: { type: Array },
});

module.exports = mongoose.model("Reps", repsSchema);
