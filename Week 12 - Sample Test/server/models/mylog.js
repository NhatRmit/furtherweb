const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  time: {type: Date, default: new Date()},
  IP: { type: String }
});

module.exports = mongoose.model("mylog", userSchema);