import { Router } from "express";
import { Signup } from "../controllers/userController.js";
const router = Router();

router.route("/signup").post(Signup);

export default router;
