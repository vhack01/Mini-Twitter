import {
  BiArrowFromLeft,
  BiBell,
  BiBookmarkAlt,
  BiHash,
  BiHome,
  BiLogoTwitter,
  BiUser,
} from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const LeftSidebar = () => {
  const { pathname } = useLocation();
  console.log("pathname:", pathname);
  return (
    <div className="w-[30%] border font-montserrat p-4">
      <ul className="l">
        <li className="">
          <Link to="/home">
            <div className="p-2 rounded-2xl mt-1 flex gap-x-3 items-center">
              <div>
                <BiLogoTwitter className="text-3xl" />
              </div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiHome className="text-2xl" />
              </div>
              <div className={pathname === "/home" ? "font-bold" : ""}>
                Home
              </div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/explore">
            <div className="p-4 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiHash className="text-2xl" />
              </div>
              <div className={pathname === "/explore" ? "font-bold" : ""}>
                Explore
              </div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/notification">
            <div className="p-4 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiBell className="text-2xl" />
              </div>
              <div className={pathname === "/notification" ? "font-bold" : ""}>
                Notification
              </div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to={""}>
            <div className="p-4 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiUser className="text-2xl" />
              </div>
              <div className={pathname === "123" ? "font-bold" : ""}>
                Profile
              </div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/bookmarks">
            <div className="p-4 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiBookmarkAlt className="text-2xl" />
              </div>
              <div className={pathname === "/bookmarks" ? "font-bold" : ""}>
                Bookmarks
              </div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiArrowFromLeft className="text-2xl" />
              </div>
              <div className="">Logout</div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-full mt-2 cursor-pointer bg-themeColor-0 text-white text-center hover:bg-themeColor-1">
              Post
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
