const mongoose = require("mongoose");

// creating a schema for job
const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job',JobSchema);
