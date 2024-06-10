import { Router } from "express";
import { Signup } from "../controllers/userController.js";
import { Login } from "../controllers/loginController.js";
import { Bookmarks } from "../controllers/userController.js";
import auth from "../middleware/auth.js";
const router = Router();

router.route("/signup").post(Signup);
router.route("/login").post(Login);
router.route("/bookmarks/:id").put(auth, Bookmarks);

export default router;
