const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

PORT = process.env.PORT || 9823;

mongoURI = process.env.mongoURI;

app.listen(PORT, () =>
  console.log("Server running on: http://localhost:" + PORT)
);

const connectDB = async () => {
  try {
    if(!mongoURI) throw new Error('no connection string found in .env')

    await mongoose.connect(mongoURI)
    console.log('Connected to DB')

  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

connectDB()