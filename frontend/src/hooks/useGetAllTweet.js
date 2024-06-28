import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import getToken from "../utils/getToken";
import axios from "axios";
import { TWEET_END_POINT } from "../utils/constants";
import { setMyTweet } from "../store/slices/tweetSlice";

const useGetAllTweet = (id) => {
  const dispatch = useDispatch();
  const refresh = useSelector((store) => store.tweet.refresh);
  const isActive = useSelector((store) => store.tweet.isActive);

  useEffect(() => {
    if (isActive === 0) fetchMyTweet();
    else fetchFollowingTweet();
  }, [refresh]);

  async function fetchMyTweet() {
    try {
      const token = getToken();
      const res = await axios.get(`${TWEET_END_POINT}/alltweet/${id}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }

      const { followings, myTweets } = res?.data;
      const mergedTweet = [...myTweets, ...followings];
      mergedTweet.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      dispatch(setMyTweet(mergedTweet));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  const fetchFollowingTweet = async () => {
    try {
      const res = await axios.get(`${TWEET_END_POINT}/following/${id}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      });
      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }
      const { followingsTweets } = res?.data;
      dispatch(setMyTweet(followingsTweets));
      // dispatch(setRefresh());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
};
export default useGetAllTweet;
