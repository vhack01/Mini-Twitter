import axios from "axios";
import { useEffect } from "react";
import { USER_END_POINT } from "../utils/constants";
import getToken from "../utils/getToken";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setBookmarks } from "../store/slices/userSlice";

const useGetBookmarks = (id) => {
  const refreshBookmark = useSelector((store) => store.user.refreshBookmark);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("refresh bookmark");
    fetchData();
  }, [refreshBookmark]);
  const fetchData = async () => {
    try {
      const res = await axios.post(
        `${USER_END_POINT}/getBookmarks`,
        {
          userId: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
      if (res.status !== 200) {
        toast.error(res.data.message);
        return;
      }
      dispatch(setBookmarks(res.data.bookmarks));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
};

export default useGetBookmarks;
