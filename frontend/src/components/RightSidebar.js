import { BiSearchAlt2 } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { SAMPLE_URL } from "../utils/constants";
const RightSidebar = () => {
  const { pathname } = useLocation();
  console.log("pathname:", pathname);
  return (
    <div className="w-[40%] border flex flex-col gap-y-4 font-montserrat p-4">
      <div className="flex pl-2 rounded-md items-center border ">
        <BiSearchAlt2 className="text-xl" />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 outline-none"
        />
      </div>
      <div className=" p-2 rounded bg-gray-100">
        <h2 className="mb-2 font-bold">Who to follow</h2>
        <div className="">
          <ul className="flex flex-col gap-y-2">
            <li className="px-2 py-1 rounded flex justify-between items-center hover:bg-gray-200">
              <div className="flex gap-x-1">
                <div className="h-[40px] w-[40px] rounded-full bg-gray-200 overflow-hidden">
                  <img src={SAMPLE_URL} className="" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="font-medium text-sm">Vishwas</div>
                  <div className="font-medium text-xs text-gray-600">
                    @Vishwas123
                  </div>
                </div>
              </div>
              <div className="">
                <button className="bg-black text-white text-xs px-4 py-2 rounded-full cursor-pointer">
                  Profile
                </button>
              </div>
            </li>
            <li className="px-2 py-1 rounded flex justify-between items-center hover:bg-gray-200">
              <div className="flex gap-x-1">
                <div className="h-[40px] w-[40px] rounded-full bg-gray-200 overflow-hidden">
                  <img src={SAMPLE_URL} className="" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="font-medium text-sm">Vishwas</div>
                  <div className="font-medium text-xs text-gray-600">
                    @Vishwas123
                  </div>
                </div>
              </div>
              <div className="">
                <button className="bg-black text-white text-xs px-4 py-2 rounded-full cursor-pointer">
                  Profile
                </button>
              </div>
            </li>
            <li className="px-2 py-1 rounded flex justify-between items-center hover:bg-gray-200">
              <div className="flex gap-x-1">
                <div className="h-[40px] w-[40px] rounded-full bg-gray-200 overflow-hidden">
                  <img src={SAMPLE_URL} className="" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="font-medium text-sm">Vishwas</div>
                  <div className="font-medium text-xs text-gray-600">
                    @Vishwas123
                  </div>
                </div>
              </div>
              <div className="">
                <button className="bg-black text-white text-xs px-4 py-2 rounded-full cursor-pointer">
                  Profile
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
