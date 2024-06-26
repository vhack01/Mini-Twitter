import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  AllTweet,
  CreateTweet,
  DeleteTweet,
  FollowingsTweet,
  LikeDislike,
  Bookmarks,
  GetTweetById,
} from "../controllers/tweetController.js";
const router = Router();

router.route("/create").post(auth, CreateTweet);
router.route("/delete/:id").delete(auth, DeleteTweet);
router.route("/like/:id").put(auth, LikeDislike);
router.route("/bookmarks/:id").put(auth, Bookmarks);
router.route("/alltweet/:id").get(auth, AllTweet);
router.route("/following/:id").get(auth, FollowingsTweet);
router.route("/tweetById/:id").get(auth, GetTweetById);
export default router;
