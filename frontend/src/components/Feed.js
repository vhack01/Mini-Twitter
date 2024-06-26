import PostBox from "./PostBox";
import Tabs from "./Tabs";
import Tweet from "./Tweet";
import useGetUserId from "../hooks/useGetUserId";
import useGetAllTweet from "../hooks/useGetAllTweet";
import { useSelector } from "react-redux";
import NoPostShimmer from "./NoPostShimmer";
import NoPost from "./NoPost";

const Feed = () => {
  const id = useGetUserId();
  useGetAllTweet(id);

  const { myTweets } = useSelector((store) => {
    return store.tweet;
  });

  return (
    <div className="">
      <Tabs />
      <PostBox />
      {myTweets === null ? (
        <NoPostShimmer />
      ) : myTweets.length > 0 ? (
        myTweets?.map((tweet) => <Tweet key={tweet?._id} data={tweet} />)
      ) : (
        <NoPost />
      )}
      <Tweet />
    </div>
  );
};

export default Feed;
