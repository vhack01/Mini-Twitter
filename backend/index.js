import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import databaseConnection from "./config/db.js";
import cors from "cors";

const app = express();
dotenv.config({
  path: ".env",
});

databaseConnection();
// [process.env.CORS_ORIGIN, "http://localhost:3000"]
const corsOption = {
  origin: process.env.CORS_ORIGIN,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));

app.use(
  express.urlencoded({
    extends: true,
  })
);

app.use(express.json());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.listen(process.env.PORT, () => {
  console.log("Listening to PORT " + process.env.PORT);
});
