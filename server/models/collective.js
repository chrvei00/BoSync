const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectiveSchema = new Schema({
  date: { type: Date, default: Date.now },
  name: { type: String, required: true, unique: true },
  members: [{ type: String, required: false }],
  event: [
    {
      name: { type: String, required: true },
      description: { type: String, required: false },
      deadline: { type: Date, required: false },
      completed: { type: Boolean, default: false },
      assigned: { type: String, required: true },
      isRepeating: { type: Boolean, required: false },
      repeatInterval: { type: Number, required: false },
      repeatIntervalCount: { type: String, required: false },
      category: { type: String, required: false },
    },
  ],
});

module.exports = mongoose.model("collective", collectiveSchema);
