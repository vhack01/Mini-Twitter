import { Router } from "express";
import {
  Signup,
  Login,
  Bookmarks,
  Profile,
  OthersProfile,
  Follow,
  Unfollow,
} from "../controllers/userController.js";
import auth from "../middleware/auth.js";
const router = Router();

router.route("/signup").post(Signup);
router.route("/login").post(Login);
router.route("/bookmarks/:id").put(auth, Bookmarks);
router.route("/profile/:id").get(auth, Profile);
router.route("/othersProfile/:id").get(auth, OthersProfile);
router.route("/follow/:id").post(auth, Follow);
router.route("/unfollow/:id").post(auth, Unfollow);

export default router;
