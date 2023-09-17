const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  date: { type: Date, default: Date.now },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  collective: { type: String, required: false },
});

module.exports = mongoose.model("user", userSchema);
