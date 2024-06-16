import PostBox from "./PostBox";
import Tabs from "./Tabs";
import Tweet from "./Tweet";
import useGetUserId from "../hooks/useGetUserId";
import useGetAllTweet from "../hooks/useGetAllTweet";
import { useSelector } from "react-redux";

const Feed = () => {
  const id = useGetUserId();
  useGetAllTweet(id);

  const { myTweets } = useSelector((store) => {
    return store.tweet;
  });
  // console.log("followers feed:", followers);
  // console.log("followers:", followers);
  if (myTweets === null) return <h1>Loading feeds...</h1>;
  console.log("myTweets:", myTweets);

  return (
    <div className="">
      <Tabs />
      <PostBox />
      {myTweets.length > 0 ? (
        myTweets?.map((tweet) => <Tweet key={tweet?._id} data={tweet} />)
      ) : (
        <h1>No Post</h1>
      )}
      <Tweet />
    </div>
  );
};

export default Feed;
