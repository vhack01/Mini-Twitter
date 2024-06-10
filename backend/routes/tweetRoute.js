import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  CreateTweet,
  DeleteTweet,
  LikeDislike,
} from "../controllers/tweetController.js";
const router = Router();

router.route("/create").post(auth, CreateTweet);
router.route("/delete/:id").delete(auth, DeleteTweet);
router.route("/like/:id").put(auth, LikeDislike);

export default router;
