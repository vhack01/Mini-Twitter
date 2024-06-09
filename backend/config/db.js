import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("Failed to connected database:", err);
    });
};

export default databaseConnection;
