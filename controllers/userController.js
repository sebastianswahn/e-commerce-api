const router = require("express").Router()
const { createNewUser } = require("../models/userModel")

router.post("/", createNewUser)

module.exports = router

