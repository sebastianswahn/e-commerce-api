const newMessage = require("../schemas/messagesSchema")

const sendMessage = async (req, res) => {
    try {
        const { message, email, name } = req.body

        if (!message || !email || !name) throw new Error("Please enter all fields")

        const createNewMessage = await newMessage.create({ message, email, name })
        res.status(200).json(createNewMessage)

    } catch (err) {
        res.status(400).json({
            message: err.message
        })

    }
}
module.exports = { sendMessage }