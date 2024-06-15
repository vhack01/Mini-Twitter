import { BiHappy, BiPhotoAlbum, BiSolidFileGif } from "react-icons/bi";
import { SAMPLE_URL, TWEET_END_POINT } from "../utils/constants";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import getToken from "../utils/getToken";
import { useDispatch } from "react-redux";
import { setRefresh } from "../store/slices/tweetSlice";

const PostBox = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleCreatePost = async () => {
    if (description.trim().length === 0) return;
    try {
      const res = await axios.post(
        `${TWEET_END_POINT}/create`,
        {
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success === false) {
        toast.error(res?.data?.message);
        return;
      }
      toast.success(res?.data?.message);
      dispatch(setRefresh());
      setDescription("");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="p-4 flex border-b gap-x-2 font-montserrat">
      <div className="h-[80px] w-[80px] rounded bg-gray-200 overflow-hidden">
        <img src={SAMPLE_URL} alt="ProfileImage" className="" />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full">
          <textarea
            className="w-full h-32 p-2 resize-none scroll-smooth outline-none text-sm"
            placeholder="What is happening?"
            spellCheck="false"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between items-center border-t p-2">
          <ul className="flex gap-x-4">
            <li className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300">
              <BiPhotoAlbum className="text-lg" />
            </li>
            <li className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300">
              <BiSolidFileGif className="text-lg" />
            </li>
            <li className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300">
              <BiHappy className="text-lg" />
            </li>
          </ul>

          <button
            className="bg-themeColor-0 rounded-3xl p-2 px-6 text-white font-medium hover:bg-themeColor-1"
            onClick={handleCreatePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
