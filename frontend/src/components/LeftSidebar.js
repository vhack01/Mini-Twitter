import {
  BiArrowFromLeft,
  BiBell,
  BiBookmarkAlt,
  BiHash,
  BiHome,
  BiSolidBell,
  BiSolidBookmarkAlt,
  BiSolidHome,
  BiSolidUser,
  BiUser,
} from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setOtherUser, setProfile, setUser } from "../store/slices/userSlice";
import { setMyTweet } from "../store/slices/tweetSlice";
import getToken from "../utils/getToken";
import { useState } from "react";
import LogoutConfirm from "./LogoutConfirm";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogout, setIsLogout] = useState(false);
  const user = useSelector((store) => {
    return store.user.user;
  });

  const handleLogout = () => {
    setIsLogout(false);
    dispatch(setUser(null));
    dispatch(setOtherUser(null));
    dispatch(setProfile(null));
    dispatch(setMyTweet(null));
    localStorage.removeItem("token");
    if (getToken() === null) navigate("/");
  };

  const { pathname } = useLocation();
  return (
    <>
      {isLogout && <LogoutConfirm data={{ setIsLogout, handleLogout }} />}
      <div className="w-[30%] border font-montserrat p-4 ">
        <ul className="l">
          <li className="">
            <Link to="/home/feed">
              <div className="p-2 rounded-2xl flex gap-x-3 items-center">
                <div>
                  <RiTwitterXLine className="text-2xl text-themeColor-0" />
                </div>
                <div className="capitalize text-lg font-semibold text-themeColor-0">
                  {user?.name}
                </div>
              </div>
            </Link>
          </li>
          <li className="">
            <Link to="/home/feed">
              <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
                <div>
                  {pathname === "/home/feed" ? (
                    <BiSolidHome className="text-2xl" />
                  ) : (
                    <BiHome className="text-2xl" />
                  )}
                </div>
                <div className={pathname === "/home/feed" ? "font-bold" : ""}>
                  Home
                </div>
              </div>
            </Link>
          </li>
          <li className="">
            <Link to="/home/explore">
              <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
                <div>
                  <BiHash className="text-2xl" />
                </div>
                <div
                  className={pathname === "/home/explore" ? "font-bold" : ""}
                >
                  Explore
                </div>
              </div>
            </Link>
          </li>
          <li className="">
            <Link to="/home/notification">
              <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
                <div>
                  {pathname === "/home/notification" ? (
                    <BiSolidBell className="text-2xl" />
                  ) : (
                    <BiBell className="text-2xl" />
                  )}
                </div>
                <div
                  className={
                    pathname === "/home/notification" ? "font-bold" : ""
                  }
                >
                  Notification
                </div>
              </div>
            </Link>
          </li>
          <li className="">
            <Link to={`/home/profile/${user?._id}`}>
              <div className="px-4 py-3 rounded-full mt-2  flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
                <div>
                  {pathname.includes("/home/profile") ? (
                    <BiSolidUser className="text-2xl" />
                  ) : (
                    <BiUser className="text-2xl" />
                  )}
                </div>
                <div
                  className={
                    pathname.includes("/home/profile") ? "font-bold" : ""
                  }
                >
                  Profile
                </div>
              </div>
            </Link>
          </li>
          <li className="">
            <Link to="/home/bookmarks">
              <div className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100">
                <div>
                  {pathname.includes("/home/bookmarks") ? (
                    <BiSolidBookmarkAlt className="text-2xl" />
                  ) : (
                    <BiBookmarkAlt className="text-2xl" />
                  )}
                </div>
                <div
                  className={pathname === "/home/bookmarks" ? "font-bold" : ""}
                >
                  Bookmarks
                </div>
              </div>
            </Link>
          </li>
          <li className="">
            <div
              className="px-4 py-3 rounded-full mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-100"
              onClick={() => setIsLogout(true)}
            >
              <div>
                <BiArrowFromLeft className="text-2xl" />
              </div>
              <div className="">Logout</div>
            </div>
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
    </>
  );
};

export default LeftSidebar;
