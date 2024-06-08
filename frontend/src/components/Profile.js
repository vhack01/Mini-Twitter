import { BiLeftArrowAlt } from "react-icons/bi";
import { BANNER_URL } from "../utils/constants";
const Profile = () => {
  return (
    <div className="border border-red-200 font-montserrat">
      <div className="border-b flex items-center gap-x-4 p-2">
        <div>
          <BiLeftArrowAlt className="text-2xl" />
        </div>
        <div>
          <div className="text-lg font-bold">Vishwas kumar</div>
          <div className="text-xs text-gray-600">136 posts</div>
        </div>
      </div>
      <div>
        <img src={BANNER_URL} className="w-full" />
      </div>
    </div>
  );
};

export default Profile;
