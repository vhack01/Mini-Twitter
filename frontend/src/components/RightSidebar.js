import { BiSearchAlt2 } from "react-icons/bi";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";
import ProfileStrip from "./ProfileStripe";
const RightSidebar = () => {
  const otherUsers = useSelector((store) => {
    return store.user.otherUser;
  });

  const user = useSelector((store) => {
    return store.user.user;
  });
  useGetOtherUsers(user?._id);

  // console.log("other users:", otherUsers);

  return (
    <div className="w-[40%] border flex flex-col gap-y-4 font-montserrat p-4">
      <div className="flex pl-2 items-center rounded-full bg-gray-100 overflow-hidden">
        <BiSearchAlt2 className="text-xl text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 outline-none bg-gray-100 text-xs font-semibold"
        />
      </div>
      <div className=" p-2 rounded bg-gray-100">
        <h2 className="mb-2 font-bold">Who to follow</h2>
        <div className="">
          <ul className="flex flex-col gap-y-2">
            {otherUsers === null ? (
              <h1>Loading otherUsers...</h1>
            ) : (
              otherUsers.map((user) => (
                <ProfileStrip key={user._id} data={user} />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
