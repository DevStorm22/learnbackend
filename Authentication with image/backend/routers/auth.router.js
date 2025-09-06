import { Router } from "express";
import { signUp, logIn, signOut } from "../controllers/auth.controller.js";
import { upload } from "../configs/multer.config.js";

const authRouter = Router();

authRouter.post("/signup", upload.single("profileImage"), signUp); // 'profileImage' is the name of the field in the form-data. upload.single is a middleware that will handle the file upload
authRouter.post("/login", logIn);
authRouter.post("/logout", signOut);

export default authRouter;
