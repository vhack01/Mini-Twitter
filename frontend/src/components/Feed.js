import { toast } from "react-toastify";
import PostBox from "./PostBox";
import Tabs from "./Tabs";
import Tweet from "./Tweet";
import { useEffect } from "react";
import useGetProfile from "./hooks/useGetProfile";

const Feed = () => {
  useGetProfile();

  useEffect(() => {
    toast.success("Welcome");
  }, []);
  return (
    <div className="">
      <Tabs />
      <PostBox />
      <Tweet />
    </div>
  );
};

export default Feed;
