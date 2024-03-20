const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  price: { type: Number },
  description: { type: String },
  category: { type: String, required: true },
  images: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
