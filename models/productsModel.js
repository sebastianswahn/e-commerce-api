const Product = require("../schemas/productsSchema");
const mongoose = require("mongoose");

exports.getAllProducts = (req, res) => {
  Product.find().then((data) => {
    res.status(200).json(data);
  }); 
};

exports.getProductById = (req, res) => {
  Product.findById(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({ message: "Not Found" });
    } else res.status(200).json(data);
  });
};

exports.createProduct = async (req, res) => {
  try {

    const { name, price, description, images, category } = req.body

    if(!name || !price || !description || !images || !category) throw new Error ("Please enter all fields")

    const product = await Product.create({ name, price, description, images, category })
    res.status(201).json(product)

  } catch (err) {


  }


}