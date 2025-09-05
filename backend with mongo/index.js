import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.config.js";
import router from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running...`);
});
