import {
  BiBookmarkAlt,
  BiHeart,
  BiMessageRounded,
  BiTrash,
} from "react-icons/bi";
import { SAMPLE_URL } from "../utils/constants";
const Tweet = () => {
  return (
    <div className="p-4 flex border-b gap-x-2 font-montserrat">
      <div className="h-[60px] w-[70px] rounded-full bg-gray-200 overflow-hidden">
        <img src={SAMPLE_URL} alt="profileImage" className="" />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-y-2">
          <div className="">
            <span className="text-xs font-bold">Vishwas </span>
            <span className="text-xs font-semibold text-gray-500">
              @vishwas123{" . "}
            </span>
            <span className="text-xs text-gray-600">2 days ago</span>
          </div>
          <div className="text-sm py-1 ">Hey I am patel </div>
        </div>

        <div className="py-2 mt-2">
          <ul className="flex justify-between gap-x-4">
            <li className="rounded-full flex items-center p-2 cursor-pointer">
              <BiMessageRounded className="text-xl" />
              <span>0</span>
            </li>
            <li className="rounded-full flex items-center p-2 cursor-pointer">
              <BiHeart className="text-xl" />
              <span>0</span>
            </li>
            <li className="rounded-full flex items-center p-2 cursor-pointer">
              <BiBookmarkAlt className="text-xl" />
              <span>0</span>
            </li>
            <li className="rounded-full flex items-center p-2 cursor-pointer">
              <BiTrash className="text-xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
