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
// origin: "https://mini-twitter-app.vercel.app",
// origin: "http://localhost:3000",
// const corsOption = {
//   origin: "https://mini-twitter-app.vercel.app",
//   credentials: true,
// };

// app.use(cors(corsOption));
console.log("cors:", process.env.CORS_ORIGIN);
app.use(
  cors({
    origin: `${process.env.CORS_ORIGIN}`,
    credentials: true,
  })
);

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
