import { BiLeftArrowAlt } from "react-icons/bi";
import { BANNER_URL, SAMPLE_URL } from "../utils/constants";
import useGetProfile from "../hooks/useGetProfile";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useGetProfile(id);
  const data = useSelector((store) => {
    return store.user.profile;
  });

  if (data === null) return <h1>Loading...</h1>;

  console.log("profile data:", data);
  const { name, username } = data;

  return (
    <div className="font-montserrat">
      <div className="border-b flex items-center gap-x-4 p-2">
        <div className="cursor-pointer">
          <BiLeftArrowAlt
            className="text-2xl"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div>
          <div className="text-lg font-bold capitalize">{name}</div>
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
        <h1 className="font-bold text-lg capitalize">{name}</h1>
        <h3 className="text-xs text-gray-600 ">@{username}</h3>
        <p className="mt-4 text-xs">Student at LPU</p>
        <p className="text-xs">A passionate Fullstack developer from india</p>
      </div>
    </div>
  );
};

export default Profile;
