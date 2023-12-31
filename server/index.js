const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");
const reps = require("./routes/reps");

const port = 8000;

// middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// routes
app.use("/api/v1/reps", reps);

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
