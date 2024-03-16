const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  /*     _id:// make ID mmodel UUI/GUID */

  name: { type: String },
  price: { type: Number },
  description: { type: String },
  category: { type: String },
  images: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
