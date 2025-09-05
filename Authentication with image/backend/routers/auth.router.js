import { Router } from "express";
import { signUp, logIn, signOut } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", logIn);
authRouter.post("/logout", signOut);

export default authRouter;
