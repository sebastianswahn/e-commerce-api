const Order = require("../schemas/ordersSchema")
const asyncHandler = require("express-async-handler")
const OrderProducts = require("../models/orderProductsModel");

const createNewOrder = asyncHandler (async (req, res) => {
    try {
        const { user, products, totalPrice } = req.body;

        if (!user || !products || !totalPrice) throw new Error("You need to add something to the cart");

        if (!req.userId || !req.body.products) throw new Error("User or products not found in request");

        const newOrder = await Order.create({ 
            user: user._id,
            products,
            totalPrice
        });

        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

module.exports.createNewOrder = createNewOrder;