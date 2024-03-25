const router = require("express").Router()
const { createNewOrder } = require("../models/ordersModel")
const { verifyToken } = require("../middleware/authMiddleware")

router.post("/", verifyToken, createNewOrder )

module.exports = router