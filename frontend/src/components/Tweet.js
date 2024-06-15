import {
  BiBookmarkAlt,
  BiHeart,
  BiMessageRounded,
  BiSolidHeart,
  BiTrash,
} from "react-icons/bi";
import { SAMPLE_URL, TWEET_END_POINT } from "../utils/constants";
import getToken from "../utils/getToken";
import axios from "axios";
import toast from "react-hot-toast";
import { setRefresh } from "../store/slices/tweetSlice";
import { useDispatch, useSelector } from "react-redux";
const Tweet = ({ data }) => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => {
    return store.user.user;
  });
  if (data === undefined) return <h1>Loading tweet</h1>;
  const {
    _id,
    userId,
    description,
    createdAt: postData,
    like,
    comment,
    userDetail,
  } = data;
  // console.log(userData);

  const handleDeleteTweet = async (id) => {
    try {
      const res = await axios.delete(`${TWEET_END_POINT}/delete/${id}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      });
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
      // toast.success(res?.data?.message);
      dispatch(setRefresh());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
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
          <div className="text-sm py-1 ">{description} </div>
        </div>

        <div className="py-2 mt-2">
          <ul className="flex justify-between gap-x-4">
            <li className="rounded-full flex items-center p-2 cursor-pointer hover:bg-green-100">
              <BiMessageRounded className="text-xl" />
              <span>{comment?.length && comment?.length}</span>
            </li>
            <li
              className="rounded-full flex items-center p-2 cursor-pointer hover:bg-red-100 "
              onClick={() => handleLikeTweet(_id)}
            >
              {like?.length > 0 && like.filter((id) => id === userData?._id) ? (
                <BiSolidHeart className={`text-red-600 text-xl`} />
              ) : (
                <BiHeart className={`text-xl`} />
              )}
              <span className="p-2"> {like?.length && like?.length}</span>
            </li>
            <li className="rounded-full flex items-center p-2 cursor-pointer hover:bg-purple-200">
              <BiBookmarkAlt className={`text-xl`} />
            </li>
            {userData?._id === userId ? (
              <li
                className="rounded-full flex items-center p-2 cursor-pointer hover:bg-red-400"
                onClick={() => handleDeleteTweet(_id)}
              >
                <BiTrash className={` text-xl`} />
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
