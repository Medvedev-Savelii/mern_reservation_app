import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import chalk from "chalk";


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

app.listen(process.env.PORT, () => {
  connect();
  console.log(chalk.bgBlue("Connected to backend."));
});
