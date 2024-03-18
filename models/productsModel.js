const Product = require("../schemas/productsSchema");
const mongoose = require("mongoose");

exports.getAllProducts = (req, res) => {
  Product.find().then((data) => {
    res.status(200).json(data);
  });
};

exports.getProductById = (req, res) => {
    Product.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).json({message: "Not Found"})
            } else 
            res.status(200).json(data)
        })
}