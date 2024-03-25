const jwt = require('jsonwebtoken') 

const verifyToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Authorization header not provided' });
    }

    const parts = req.headers.authorization.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Authorization header format is Bearer <token>' });
    }

    const token = parts[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user._id = decoded.user._id;
    next();
  } catch (err) {
    res.status(401);
    let message = 'Access restricted Please Login!';

    if(err.name === 'TokenExpiredError') {
      message = 'Session expired, please login';
    }

    res.json({ message });
  }
}

module.exports.verifyToken = verifyToken;