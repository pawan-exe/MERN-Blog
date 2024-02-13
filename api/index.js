import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// database configuration
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
