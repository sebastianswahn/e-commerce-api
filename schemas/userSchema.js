const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  /*     make id bar */

  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
