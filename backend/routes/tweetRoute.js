import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  AllTweet,
  CreateTweet,
  DeleteTweet,
  FollowingsTweet,
  LikeDislike,
} from "../controllers/tweetController.js";
const router = Router();

router.route("/create").post(auth, CreateTweet);
router.route("/delete/:id").delete(auth, DeleteTweet);
router.route("/like/:id").put(auth, LikeDislike);
router.route("/alltweet/:id").get(auth, AllTweet);
router.route("/followingTweet/:id").get(auth, FollowingsTweet);
export default router;
