const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/products", require("./controllers/productController"))

app.use("/api/users", require("./controllers/userController"))

app.use("/api/messages", require("./controllers/messageController"))

app.use("/api/orders", require("./controllers/ordersController"))

module.exports = app;