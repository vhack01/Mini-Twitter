import { Link } from "react-router-dom";
import { SAMPLE_URL } from "../utils/constants";

const ProfileStrip = ({ data }) => {
  const { _id: id, name, username } = data;
  return (
    <li className="px-2 py-1 rounded flex justify-between items-center hover:bg-gray-200">
      <div className="flex gap-x-1">
        <div className="h-[40px] w-[40px] rounded-full bg-gray-200 overflow-hidden">
          <img src={SAMPLE_URL} className="" alt="ProfileImage" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="font-medium text-sm">{name}</div>
          <div className="font-medium text-xs text-gray-600">@{username}</div>
        </div>
      </div>
      <div className="">
        <Link to={`/home/profile/${id}`}>
          <button className="bg-black text-white text-xs px-4 py-2 rounded-full cursor-pointer">
            Profile
          </button>
        </Link>
      </div>
    </li>
  );
};

export default ProfileStrip;
