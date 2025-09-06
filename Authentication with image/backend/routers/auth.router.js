import { Router } from "express";
import {
  signUp,
  logIn,
  signOut,
  getUser,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import checkAuth from "../middlewares/checkAuth.middleware.js";

const authRouter = Router();

authRouter.post("/signup", upload.single("profileImage"), signUp); // 'profileImage' is the name of the field in the form-data. upload.single is a middleware that will handle the file upload
authRouter.post("/login", logIn);
authRouter.post("/logout", signOut);
authRouter.get("/user", checkAuth, getUser);

export default authRouter;
