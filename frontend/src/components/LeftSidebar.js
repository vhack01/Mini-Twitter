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
            <div className="p-2 rounded-2xl flex gap-x-3 items-center">
              <div>
                <BiLogoTwitter className="text-3xl" />
              </div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
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
            <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
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
            <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
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
          <Link to="/profile">
            <div className="px-4 py-3 rounded-full mt-2  flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
              <div>
                <BiUser className="text-2xl" />
              </div>
              <div className={pathname === "/profile" ? "font-bold" : ""}>
                Profile
              </div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/bookmarks">
            <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
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
            <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
              <div>
                <BiArrowFromLeft className="text-2xl" />
              </div>
              <div className="">Logout</div>
            </div>
          </Link>
        </li>
        <li className="mt-2">
          <Link to="/home">
            <div className="px-4 py-3 rounded-full mt-2 cursor-pointer bg-themeColor-0 text-white text-center hover:bg-themeColor-1">
              Post
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
