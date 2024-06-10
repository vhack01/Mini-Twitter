import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
function App() {
  console.log("Home");
  return (
    <Provider store={appStore}>
      <div className="sm:w-full lg:w-[1300px]  h-screen m-auto flex">
        <LeftSidebar />
        <div className="w-full">
          <Outlet />
        </div>
        <RightSidebar />
      </div>
      <Toaster />
    </Provider>
  );
}

export default App;
