import { BiLeftArrowAlt } from "react-icons/bi";
import { BANNER_URL, SAMPLE_URL, USER_END_POINT } from "../utils/constants";
import useGetProfile from "../hooks/useGetProfile";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import getToken from "../utils/getToken";
import { updateFollowing } from "../store/slices/userSlice";
import { setRefresh } from "../store/slices/tweetSlice";
import Tweet from "./Tweet";
import NoPostShimmer from "./NoPostShimmer";
import NoPost from "./NoPost";
import { ShimmerSocialPost } from "react-shimmer-effects";
import useGetProfileTweet from "../hooks/useGetProfileTweet";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: profileId } = useParams();
  useGetProfile(profileId);
  useGetProfileTweet(profileId);

  const profileData = useSelector((store) => {
    return store.user.profile;
  });
  const userData = useSelector((store) => {
    return store.user.user;
  });

  const tweets = useSelector((store) => store.tweet.profileTweet);

  if (profileData === null) return <ShimmerSocialPost type="image" />;
  const { _id, name, username } = profileData;

  function handleFollowUnfollow(id) {
    if (userData?.followings?.includes(id)) {
      unfollow(id);
    } else {
      follow(id);
    }
  }

  async function unfollow(id) {
    try {
      const res = await axios.post(
        `${USER_END_POINT}/unfollow/${id}`,
        { userId: userData?._id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
      toast.success(res.data.message);
      dispatch(updateFollowing(id));
      dispatch(setRefresh());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  async function follow(id) {
    try {
      const res = await axios.post(
        `${USER_END_POINT}/follow/${id}`,
        { userId: userData?._id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }
      toast.success(res.data.message);
      dispatch(updateFollowing(id));
      dispatch(setRefresh());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <div className="font-montserrat">
      <div className="border-b flex items-center gap-x-4 p-2">
        <div className="cursor-pointer">
          <BiLeftArrowAlt
            className="text-2xl"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div>
          <div className="text-lg font-bold capitalize">{name}</div>
          <div className="text-xs text-gray-600">136 posts</div>
        </div>
      </div>
      <div>
        <img src={BANNER_URL} alt="banner" className="w-full" />
      </div>
      <div className="flex justify-between items-center relative px-4 ">
        <div className="w-[150px] h-[150px] border-4 border-white rounded-full overflow-hidden -mt-20">
          <img src={SAMPLE_URL} alt="profilImage" className="object-contain" />
        </div>
        <div className="">
          {userData?._id === _id ? (
            <button className="border-2 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full cursor-pointer">
              Edit
            </button>
          ) : userData?.followings?.includes(_id) ? (
            <button
              className="border border-gray-400 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full cursor-pointer"
              onClick={() => handleFollowUnfollow(_id)}
            >
              following
            </button>
          ) : (
            <button
              className="bg-black text-white text-xs px-4 py-2 rounded-full cursor-pointer"
              onClick={() => handleFollowUnfollow(_id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>

      <div className="p-2 px-4">
        <h1 className="font-bold text-lg capitalize">{name}</h1>
        <h3 className="text-xs text-gray-600 ">@{username}</h3>
        <p className="mt-4 text-xs">Student at LPU</p>
        <p className="text-xs">A passionate Fullstack developer from india</p>
      </div>

      <div className="border-t">
        {tweets === null ? (
          <NoPostShimmer />
        ) : tweets.length > 0 ? (
          tweets?.map((tweet) => <Tweet key={tweet?._id} data={tweet} />)
        ) : (
          <NoPost />
        )}
      </div>
    </div>
  );
};

export default Profile;
