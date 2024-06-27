import { useEffect } from "react";
import { toast } from "react-toastify";
import { TWEET_END_POINT } from "../utils/constants";
import axios from "axios";
import getToken from "../utils/getToken";
import { useDispatch } from "react-redux";
import { setProfileTweet } from "../store/slices/tweetSlice";

const useGetProfileTweet = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      const token = getToken();
      const res = await axios.get(`${TWEET_END_POINT}/tweetById/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        withCredentials: true,
      });

      if (res?.data?.success === false) {
        toast.error(res?.data?.message);
        return;
      }
      dispatch(setProfileTweet(res.data.profileTweet));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
};

export default useGetProfileTweet;
