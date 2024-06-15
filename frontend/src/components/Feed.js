import PostBox from "./PostBox";
import Tabs from "./Tabs";
import Tweet from "./Tweet";
import useGetUserId from "../hooks/useGetUserId";
import useGetAllTweet from "../hooks/useGetAllTweet";
import { useSelector } from "react-redux";

const Feed = () => {
  const id = useGetUserId();
  useGetAllTweet(id);

  const { myTweets, followers } = useSelector((store) => {
    return store.tweet;
  });
  console.log("followers:", followers);
  if (myTweets === null && followers === null) return <h1>Loading feeds...</h1>;
  const mergedTweet = [...myTweets, ...followers];
  console.log("mergedTweet:", mergedTweet);

  return (
    <div className="">
      <Tabs />
      <PostBox />
      {mergedTweet?.map((tweet) => (
        <Tweet key={tweet?._id} data={tweet} />
      ))}
      <Tweet />
    </div>
  );
};

export default Feed;
