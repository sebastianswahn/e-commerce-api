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
