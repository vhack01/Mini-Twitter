import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import databaseConnection from "./config/db.js";
const app = express();

dotenv.config({
  path: ".env",
});

databaseConnection();

app.use(
  express.urlencoded({
    extends: true,
  })
);

app.use(express.json());
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Listening to PORT " + process.env.PORT);
});
