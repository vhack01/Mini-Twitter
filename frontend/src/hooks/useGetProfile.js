import { useEffect } from "react";
import { toast } from "react-toastify";
import { USER_END_POINT } from "../utils/constants";
import axios from "axios";
import getToken from "../utils/getToken";
import { useDispatch } from "react-redux";
import { setProfile } from "../store/slices/userSlice";

const useGetProfile = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      const token = getToken();
      const res = await axios.get(`${USER_END_POINT}/profile/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        withCredentials: true,
      });

      if (res?.data?.success === false) {
        toast.error(res?.data?.message);
        return;
      }
      dispatch(setProfile(res.data.profile));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
};

export default useGetProfile;
