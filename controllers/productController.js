const router = require("express").Router()
const {createNewProduct, getAllProducts, getProductById } = require("../models/productsModel")

router.post("/", createNewProduct)
router.get("/", getAllProducts)
router.get("/:id", getProductById)

module.exports = router