import PostBox from "./PostBox";
import Tabs from "./Tabs";
import Tweet from "./Tweet";
import useGetUserId from "../hooks/useGetUserId";
import useGetAllTweet from "../hooks/useGetAllTweet";
const Feed = () => {
  const id = useGetUserId();
  console.log("id:", id);
  useGetAllTweet(id);

  return (
    <div className="">
      <Tabs />
      <PostBox />
      <Tweet />
    </div>
  );
};

export default Feed;
