const mongoose = require('mongoose');
const orderProductsSchema = require("../schemas/orderProductsSchema");

const OrderProducts = mongoose.model('OrderProducts', orderProductsSchema);

const gatherProducts = async (products) => {
    let gatheredProducts = [];
    for (let product of products) {
        let gatheredProduct = await OrderProducts.findById(product._id).populate('products');
        gatheredProducts.push(gatheredProduct);
    }
    return gatheredProducts;
}


module.exports = OrderProducts;