import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import getToken from "../utils/getToken";
import axios from "axios";
import { TWEET_END_POINT } from "../utils/constants";
import { setAllTweet } from "../store/slices/tweetSlice";

const useGetAllTweet = (id) => {
  const dispatch = useDispatch();

  const refresh = useSelector((store) => store.tweet.refresh);

  useEffect(() => {
    fetchTweet();
  }, [refresh]);

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
      const { followers, myTweets } = res?.data;
      dispatch(setAllTweet({ followers: followers[0], myTweets }));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
};
export default useGetAllTweet;
