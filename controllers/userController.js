const router = require("express").Router()
const { createNewUser, userLogin } = require("../models/userModel")

router.post("/register", createNewUser)
router.post("/login", userLogin)

module.exports = router

