const Product = require("../schemas/productSchema");


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

exports.createNewProduct = async (req, res) => {
  try {

    const { name, price, description, category, images  } = req.body

    if(!name || !price || !description || !images || !category) throw new Error ("Please enter all fields")

    const product = await Product.create({ name, price, description, category, images })
    res.status(201).json(product)

  } catch (err) {
    res.json({
      message: err.message
    })

  }}

  exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Not Found" });
        } else res.status(200).json({ message: "Product deleted" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
      });
  }

  exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Not Found" });
        } else res.status(200).json({ message: "Product updated" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
      });
  }