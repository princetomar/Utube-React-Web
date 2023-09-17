import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err.message);
      // Exit the application on database connection failure
      process.exit(1);
    });
};

app.listen(8800, () => {
  connect();
  console.log("Connected");
});
