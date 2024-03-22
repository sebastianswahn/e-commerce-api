const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const tokenGenerator = (user) => {
    try {
            return jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: '30d',
    });
    } catch (error) {
        console.log(error);
    }


}
module.exports = tokenGenerator;