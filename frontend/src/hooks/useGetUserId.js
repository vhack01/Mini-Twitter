import { useSelector } from "react-redux";

const useGetUserId = () => {
  const id = useSelector((store) => {
    return store?.user?.user?._id;
  });

  return id;
};

export default useGetUserId;
