const User = require("../schemas/userSchema")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const tokenGenerator = require("../utils/tokenGenerator.js")
const mongoose = require("mongoose")


createNewUser = asyncHandler (async (req, res) => {

        const { email, password } = req.body

        if (!email || !password) {
            res.status(400)
            throw new Error ("You need to enter an email and password")
        }

        const emailTaken = await User.exists({ email })
        if (emailTaken) {
            res.status(400)
            throw new Error ("Email already taken")
        }


        const user = new User({ email, passwordHash: password })
        await user.save()

        console.log(user)

        const token = tokenGenerator(user)

        console.log(token)

        res.status(201).json({
            _id: user._id,
            email: user.email,
            token
        })
 })

        const userLogin = asyncHandler (async (req, res) => {
            const { email, password } = req.body

            if (!email || !password) {
                res.status(400)
                throw new Error ("You need to enter an email and password") 
            }

            const user = await User.findOne({ email })

            if (!user) {
                res.status(401)
                throw new Error ("Incorrect email or password")
            }

            if (user && (await user.matchPassword(password))) {
                res.status(200).json({
                    _id: user._id,
                    email: user.email,
                    token: tokenGenerator(user)
                })
                
            } else {
                res.status(401)
                throw new Error ("Invalid email or password")
            }
        })


module.exports = { createNewUser, userLogin}