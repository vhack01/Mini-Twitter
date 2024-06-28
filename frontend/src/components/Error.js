import { useRouteError } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
const Error = () => {
  const errMsg = useRouteError();
  return (
    <div className="sm:w-full lg:w-[1300px]  h-screen m-auto flex">
      <LeftSidebar />
      <div className="w-full">
        <h1>Page NOT FOUND</h1>
      </div>
    </div>
  );
};

export default Error;
