const User = require("../schemas/userSchema")


exports.createNewUser = async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email || !password) throw new Error ("You need to enter an email and password")

        const user = await User.create({ email, password })
        res.status(201).json(user)

    } catch {
        res.json({
            message: err.message
          })
    }
}