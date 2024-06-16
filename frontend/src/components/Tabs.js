import { useDispatch, useSelector } from "react-redux";
import { setIsActive, setRefresh } from "../store/slices/tweetSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((store) => store.tweet.isActive);
  const handleFollowingTab = () => {
    dispatch(setIsActive());
    dispatch(setRefresh());
  };

  return (
    <div className="flex border-b border-t">
      <div
        className={`w-[50%] hover:bg-gray-100 cursor-pointer p-2 text-center ${
          !isActive ? "border-b-2 border-themeColor-0" : ""
        }`}
        onClick={handleFollowingTab}
      >
        For you
      </div>
      <div
        className={`w-[50%] hover:bg-gray-100 cursor-pointer p-2 text-center ${
          isActive ? "border-b-2 border-themeColor-0" : ""
        }`}
        onClick={handleFollowingTab}
      >
        Following
      </div>
    </div>
  );
};

export default Tabs;
