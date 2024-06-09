import { Router } from "express";
import { Signup } from "../controllers/userController.js";
import { Login } from "../controllers/loginController.js";
import { CreateTweet } from "../controllers/tweetController.js";
import auth from "../middleware/auth.js";
const router = Router();

router.route("/signup").post(Signup);
router.route("/login").post(Login);
router.route("/tweet").post(auth, CreateTweet);

export default router;
