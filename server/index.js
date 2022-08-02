import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import chalk from "chalk";
///////////////////////////////////////////////////////////////
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";

const app = express();
dotenv.config();

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Connected DB Mongo
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(chalk.bgBlue("Connected to mongoDB."));
  } catch (error) {
    throw error;
  }
};

//Route Crud
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log(chalk.bgBlue("Connected to backend."));
});
