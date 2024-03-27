const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  passwordHash: { type: String, required: true },
});

userSchema.methods.matchPassword = async function (passwordInput) {
  return await bcrypt.compare(passwordInput, this.passwordHash);
}

userSchema.pre("save", async function (next) {
  if (!this.isModified("passwordHash")) { 
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjAzZjUwZjFmYjgzY2EwZDM2ZTkyNzYiLCJpYXQiOjE3MTE1MzUzNzYsImV4cCI6MTcxNDEyNzM3Nn0.L_XWfM4qdB5Dxq-Db_EjZsl6lhOP-VwMxV-zfl80njM
//6603f50f1fb83ca0d36e9276
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjAzZjUwZjFmYjgzY2EwZDM2ZTkyNzYiLCJpYXQiOjE3MTE1MzU1MjYsImV4cCI6MTcxNDEyNzUyNn0.2lL-nzoW4GoOjUdDKfZVth7dghmAXPMDZeSmBc8Dm54