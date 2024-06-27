import { useSelector } from "react-redux";
import useGetBookmarks from "../hooks/useGetBookmarks";
import NoPostShimmer from "./NoPostShimmer";
import NoPost from "./NoPost";
import Tweet from "./Tweet";

const Bookmarks = () => {
  const user = useSelector((store) => store.user.user);

  useGetBookmarks(user._id);
  const tweets = useSelector((store) => store.user.bookmarks);

  return (
    <div className="border-t">
      {tweets === null ? (
        <NoPostShimmer />
      ) : tweets.length > 0 ? (
        tweets?.map((tweet) => <Tweet key={tweet?._id} data={tweet} />)
      ) : (
        <NoPost />
      )}
    </div>
  );
};

export default Bookmarks;
