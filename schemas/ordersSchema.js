const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  _id: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  totalPrice: { type: Number },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
