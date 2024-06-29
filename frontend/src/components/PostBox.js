import { BiHappy, BiPhotoAlbum, BiSolidFileGif, BiX } from "react-icons/bi";
import { SAMPLE_URL, TWEET_END_POINT } from "../utils/constants";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import getToken from "../utils/getToken";
import { useDispatch } from "react-redux";
import { setRefresh } from "../store/slices/tweetSlice";
import EmojiPicker from "emoji-picker-react";
import { Oval } from "react-loader-spinner";
import PostBoxImage from "./PostBoxImage";

const PostBox = () => {
  const dispatch = useDispatch();
  const [emoji, setEmoji] = useState(false);
  const [description, setDescription] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [files, setFiles] = useState([]);

  const handleCreatePost = async () => {
    setEmoji(false);
    if (description.trim().length === 0 && files.length === 0) return;
    setIsloading(true);
    try {
      let uploadedImages = [];
      if (files) {
        uploadedImages = await handleUploadImage();
      }
      const res = await axios.post(
        `${TWEET_END_POINT}/create`,
        {
          description,
          uploadedImages,
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
      setIsloading(false);
      setFiles([]);
    } catch (err) {
      setIsloading(false);
      toast.error(err.response.data.message);
    }
  };

  const handleEmoji = (par) => {
    setDescription((description) => description + par?.emoji);
  };

  const handleUploadImage = async () => {
    const uploadedImages = [];
    for (let i = 0; i < files.length; i++) {
      console.log("ImageFile:", files[i]);
      if (!files[i]?.type.includes("image")) {
        toast.error(files[i].name + "is invalid file. Only image/gif.");
        continue;
      }
      const data = new FormData();
      data.append("file", files[i]);
      data.append("public_id", files[i].name);
      data.append("upload_preset", "r6h1ntnp");
      data.append("api_key", "415817326442787");
      data.append("folder", "mini-twitter");
      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dryvdqck7/image/upload/",
          data
        );
        if (res.status !== 200) {
          toast.error(res?.data?.message);
          return;
        }
        uploadedImages.push(res.data);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }

    return uploadedImages;
  };

  const handleRemoveImage = (removeFile) => {
    setFiles((files) => files.filter((file) => file !== removeFile));
  };
  return (
    <div className="p-4 flex border-b gap-x-2 font-montserrat">
      <div className="h-[80px] w-[80px] rounded bg-gray-200 overflow-hidden">
        <img src={SAMPLE_URL} alt="ProfileImage" className="" />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full">
          <textarea
            className="w-full h-32 p-2 resize-none scroll-smooth outline-none text-base font-medium"
            placeholder="What is happening?"
            spellCheck="false"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex gap-2 flex-wrap">
            {files &&
              files.map((file) => (
                <PostBoxImage
                  key={file.name}
                  file={file}
                  handleRemoveImage={handleRemoveImage}
                />
              ))}
          </div>
        </div>
        <div className="flex justify-between items-center border-t p-2">
          <ul className="flex gap-x-4">
            <li className="">
              <div className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300 cursor-pointer">
                <label htmlFor="postFile">
                  <BiPhotoAlbum className="text-lg" htmlFor="postFile" />
                </label>
                <input
                  type="file"
                  id="postFile"
                  className="hidden"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => setFiles([...e.target.files])}
                  multiple
                />
              </div>
            </li>
            <li className="relative">
              <div
                className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300"
                onClick={() => setEmoji(!emoji)}
              >
                <BiHappy className="text-lg" />
              </div>
              <div className="absolute">
                {emoji && <EmojiPicker onEmojiClick={handleEmoji} />}
              </div>
            </li>
          </ul>

          <button
            className="bg-themeColor-0 rounded-3xl p-2 px-6 text-white font-medium hover:bg-themeColor-1"
            onClick={handleCreatePost}
          >
            {isloading ? (
              <Oval
                visible={true}
                height="15"
                width="15"
                color="#fff"
                ariaLabel="oval-loading"
                secondaryColor="#fff"
                wrapperClass=""
              />
            ) : (
              "Post"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
