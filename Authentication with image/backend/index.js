import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/mongodb.config.js";
import authRouter from "./routers/auth.router.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({ path: "./configs/.env" });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser()); // Cookie parser is used to parse cookies from the request

app.use("/api", authRouter); // Routers MUST be used after the middlewares

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});
