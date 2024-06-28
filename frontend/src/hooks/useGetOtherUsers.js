import { useEffect } from "react";
import axios from "axios";
import { USER_END_POINT } from "../utils/constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import getToken from "../utils/getToken";

import { setOtherUser } from "../store/slices/userSlice";
const useGetOtherUsers = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const token = getToken();
      const res = await axios.get(`${USER_END_POINT}/othersProfile/${id}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }

      dispatch(setOtherUser(res?.data?.users));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
};
export default useGetOtherUsers;
