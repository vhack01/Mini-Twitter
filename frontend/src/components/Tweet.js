import {
  BiBookmarkAlt,
  BiHeart,
  BiMessageRounded,
  BiSolidBookmarkAlt,
  BiSolidHeart,
  BiTrash,
} from "react-icons/bi";
import { SAMPLE_URL, TWEET_END_POINT } from "../utils/constants";
import getToken from "../utils/getToken";
import axios from "axios";
import toast from "react-hot-toast";
import { setRefresh } from "../store/slices/tweetSlice";
import { useDispatch, useSelector } from "react-redux";
import { setBookmarkRefresh } from "../store/slices/userSlice";
import TweetImage from "./TweetImage";
import { useState } from "react";
import DeleteTweetConfirm from "./DeleteTweetConfirm";
const Tweet = ({ data }) => {
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = useState(false);
  const userData = useSelector((store) => {
    return store.user.user;
  });
  if (!data) return;
  const {
    _id: tweet_id,
    userId,
    description,
    createdAt: postData,
    like,
    comment,
    bookmarks,
    userDetail,
    images,
  } = data;

  const handleDeleteTweet = async () => {
    try {
      const res = await axios.delete(`${TWEET_END_POINT}/delete/${tweet_id}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      });
      console.log("delete tweet res:", res);
      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }
      toast.success(res?.data?.message);
      dispatch(setRefresh());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleLikeTweet = async (tweet_id) => {
    console.log("tweet_id:", tweet_id);
    try {
      const res = await axios.put(
        `${TWEET_END_POINT}/like/${tweet_id}`,
        { userId: userData?._id },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }
      dispatch(setRefresh());
      dispatch(setBookmarkRefresh());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleBookmarkTweet = async (id) => {
    try {
      const res = await axios.put(
        `${TWEET_END_POINT}/bookmarks/${id}`,
        { userId: userData?._id },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }
      toast.success(res?.data?.message);
      dispatch(setRefresh());
      dispatch(setBookmarkRefresh());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      {isDelete && (
        <DeleteTweetConfirm data={{ setIsDelete, handleDeleteTweet }} />
      )}
      <div className="p-4 flex border-b gap-x-2 font-montserrat">
        <div className="h-[60px] w-[70px] rounded-full bg-gray-200 overflow-hidden">
          <img src={SAMPLE_URL} alt="profileImage" className="" />
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-y-2">
            <div className="">
              <span className="text-sm font-semibold">{userDetail?.name} </span>
              <span className="text-xs font-semibold text-gray-500">
                @{userDetail?.username}
                {" . "}
              </span>
              <span className="text-xs text-gray-600">{postData}</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-sm py-1 font-medium">{description}</div>
              <div className="flex flex-wrap gap-2">
                {images?.map((image) => (
                  <TweetImage key={image?.asset_id} image={image} />
                ))}
              </div>
            </div>
          </div>

          <div className="py-2 mt-2">
            <ul className="flex justify-between gap-x-4">
              {/* Comment */}
              <li className="flex items-center p-2 ">
                <div className="cursor-pointer hover:bg-green-100 p-2 rounded-full">
                  <BiMessageRounded className="text-xl" />
                </div>
                <span>{comment?.length && comment?.length}</span>
              </li>

              {/* Like */}
              <li className="flex items-center p-2">
                <div
                  className="cursor-pointer hover:bg-red-100 p-2 rounded-full"
                  onClick={() => handleLikeTweet(tweet_id)}
                >
                  {like?.length > 0 &&
                  like.filter((id) => id === userData?._id) ? (
                    <BiSolidHeart className="text-red-600 text-xl " />
                  ) : (
                    <BiHeart className={`text-xl`} />
                  )}
                </div>
                <span className="p-2"> {like?.length && like?.length}</span>
              </li>

              {/* Bookmark */}
              <li className="flex items-center p-2 cursor-pointer">
                <div
                  className="cursor-pointer hover:bg-purple-200 p-2 rounded-full"
                  onClick={() => handleBookmarkTweet(tweet_id)}
                >
                  {bookmarks?.length > 0 &&
                  bookmarks?.includes(userData?._id) ? (
                    <BiSolidBookmarkAlt className={`text-purple-500 text-xl`} />
                  ) : (
                    <BiBookmarkAlt className={`text-xl`} />
                  )}
                </div>
              </li>

              {/* Delete */}
              {userData?._id === userId ? (
                <li className="flex items-center p-2">
                  <div
                    className="cursor-pointer hover:bg-red-400 p-2 rounded-full"
                    onClick={() => setIsDelete(true)}
                  >
                    <BiTrash className={` text-xl`} />
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
