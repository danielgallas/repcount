const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const port = 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to the database...");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();