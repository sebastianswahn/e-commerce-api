const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  category: { type: String },
  images: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
