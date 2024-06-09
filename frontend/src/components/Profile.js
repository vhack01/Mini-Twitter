import { BiLeftArrowAlt } from "react-icons/bi";
import { BANNER_URL, SAMPLE_URL } from "../utils/constants";
const Profile = () => {
  return (
    <div className="font-montserrat">
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
        <img src={BANNER_URL} alt="banner" className="w-full" />
      </div>
      <div className="flex justify-between items-center relative px-4 ">
        <div className="w-[150px] h-[150px] border-4 border-white rounded-full overflow-hidden -mt-20">
          <img src={SAMPLE_URL} alt="profilImage" className="object-contain" />
        </div>
        <div className="">
          <button className="bg-black text-white text-xs px-4 py-2 rounded-full cursor-pointer">
            Follow
          </button>
        </div>
      </div>

      <div className="p-2 px-4">
        <h1 className="font-bold text-lg">Vishwas Kumar</h1>
        <h3 className="text-xs text-gray-600">@Vishwas123</h3>
        <p className="mt-4 text-xs">Student at LPU</p>
        <p className="text-xs">A passionate Fullstack developer from india</p>
      </div>
    </div>
  );
};

export default Profile;
