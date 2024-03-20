const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

PORT = process.env.PORT || 9823;

mongoURI = process.env.mongoURI;

app.listen(PORT, () =>
  console.log("Server running on: http://localhost:" + PORT)
);

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err.message));
