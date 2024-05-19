/* Env Decleared */
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

/* Other Import */
import cors from "cors";

/* Express Intialize */
import express from "express";
import cookieParser from "cookie-parser";
import connectDb from "./config/database.js";
const app = express();

/* Cors MiddleWare */
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

/* Express Json and cookie parser*/
app.use(express.json());
app.use(cookieParser());

/* Server Running and COnnection to database */
app.listen(PORT, () => {
  connectDb(process.env.DB_URL)
  console.log(`Server Running on ${PORT}`);
});
