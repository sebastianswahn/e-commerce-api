const router = require("express").Router()
const {createNewProduct, getAllProducts, getProductById, deleteProduct, updateProduct } = require("../models/productsModel")

router.post("/", createNewProduct)
router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.delete("/:id", deleteProduct)
router.patch("/:id", updateProduct)

module.exports = router