import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import getToken from "../utils/getToken";
import axios from "axios";
import { TWEET_END_POINT } from "../utils/constants";
import { setAllTweet } from "../store/slices/tweetSlice";

const useGetAllTweet = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTweet();
  }, []);

  async function fetchTweet() {
    try {
      const token = getToken();
      const res = await axios.get(`${TWEET_END_POINT}/alltweet/${id}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      console.log("all tweets:", res);
      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }
      const { followingsTweets, myTweets } = res?.data;
      dispatch(setAllTweet({ followingsTweets, myTweets }));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
};
export default useGetAllTweet;
