const mongoose = require("mongoose");

const orderProductsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref: Product },
  quantity: { type: Number },
});

const OrderProducts = mongoose.model("OrderProducts", orderProductsSchema);

module.exports = OrderProducts;
