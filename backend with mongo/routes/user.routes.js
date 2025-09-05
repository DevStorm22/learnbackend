import { Router } from "express";
import {
  deleteByName,
  home,
  register,
  searchByName,
  updateByIdCompletely,
  updateByIdPartially,
  userById,
  users,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", home);

router.post("/register", register);

router.get("/users", users);

router.get("/user/:id", userById);

router.get("/search/:name", searchByName);

router.delete("/user/:name", deleteByName);

router.put("/user/:id", updateByIdCompletely);

router.patch("/user/:id", updateByIdPartially);

export default router;
