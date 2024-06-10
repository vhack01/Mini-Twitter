import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { USER_END_POINT } from "../utils/constants";
import axios from "axios";
import getToken from "../utils/getToken";

const useGetProfile = (id) => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const token = getToken();
      console.log("teken", token);
      const res = await axios.get(`${USER_END_POINT}/profile/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        withCredentials: true,
      });
      // console.log("profile res:", res);
      if (res?.data?.success === false) {
        toast.error(res?.data?.message);
        return;
      }
      setProfile(profile);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return profile;
};

export default useGetProfile;
