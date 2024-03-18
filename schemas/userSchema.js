const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
