import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Home = () => {
  return (
    <div className="sm:w-full lg:w-[1300px]  h-screen m-auto flex">
      <LeftSidebar />
      <div className="w-full">
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
