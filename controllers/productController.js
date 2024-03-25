const router = require("express").Router()
const {createNewProduct, getAllProducts, getProductById, deleteProduct  } = require("../models/productsModel")

router.post("/", createNewProduct)
router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.delete("/:id", deleteProduct)

module.exports = router