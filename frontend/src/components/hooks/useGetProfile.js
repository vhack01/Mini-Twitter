import { useEffect } from "react";
import { toast } from "react-toastify";
import { USER_END_POINT } from "../../utils/constants";
import axios from "axios";

const useGetProfile = () => {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get(`${USER_END_POINT}/profile/${id}`);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
};

export default useGetProfile;
