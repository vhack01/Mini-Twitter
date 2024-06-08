import {
  BiArrowFromLeft,
  BiBell,
  BiBookmarkAlt,
  BiHash,
  BiHome,
  BiLogoTwitter,
} from "react-icons/bi";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div className="border-2 font-montserrat p-4">
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
            <div className="p-4 rounded-3xl mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiHome className="text-2xl" />
              </div>
              <div className="font-bold">Home</div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-3xl mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiHash className="text-2xl" />
              </div>
              <div className="">Explore</div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-3xl mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiBell className="text-2xl" />
              </div>
              <div className="">Notification</div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-3xl mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiBell className="text-2xl" />
              </div>
              <div className="">Profile</div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-3xl mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiBookmarkAlt className="text-2xl" />
              </div>
              <div className="">Bookmarks</div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-3xl mt-2 flex gap-x-3 items-center cursor-pointer hover:bg-gray-200">
              <div>
                <BiArrowFromLeft className="text-2xl" />
              </div>
              <div className="">Logout</div>
            </div>
          </Link>
        </li>
        <li className="">
          <Link to="/home">
            <div className="p-4 rounded-3xl mt-2 cursor-pointer bg-themeColor-0 text-white text-center hover:bg-themeColor-1">
              Post
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
