const mongoose = require("mongoose");
const Product = require("./productSchema");

const orderProductsSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: Product }],
  quantity: { type: Number },
});


module.exports = orderProductsSchema;
