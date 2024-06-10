import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { Outlet } from "react-router-dom";
function App() {
  console.log("Home");
  return (
    <Provider store={appStore}>
      <Outlet />
      <Toaster />
    </Provider>
  );
}

export default App;
