import { useSelector } from "react-redux";
import useGetBookmarks from "../hooks/useGetBookmarks";
import NoPostShimmer from "./NoPostShimmer";
import NoBookmarks from "./NoBookmarks";
import Tweet from "./Tweet";
import FeedHeader from "./FeedHeader";

const Bookmarks = () => {
  const user = useSelector((store) => store.user.user);
  useGetBookmarks(user?._id);
  const tweets = useSelector((store) => store.user.bookmarks);
  console.log("tweet:", tweets);
  return (
    <div className="border-t">
      <FeedHeader heading="Bookmarks" username={user?.username} />
      <div className="pt-5">
        {tweets === null ? (
          <NoPostShimmer />
        ) : tweets?.length > 0 ? (
          tweets?.map(
            (tweet) => tweet && <Tweet key={tweet?._id} data={tweet} />
          )
        ) : (
          <NoBookmarks />
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
