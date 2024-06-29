import { TbTrashXFilled } from "react-icons/tb";

const DeleteTweetConfirm = ({ data }) => {
  const { setIsDelete, handleDeleteTweet } = data;
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-blackTransparent flex justify-center items-center pt-7 z-30">
      <div className="w-8/12 sm:w-5/12 lg:w-3/12 bg-dialogColor shadow-lg shadow-gray-700 p-10 rounded-md">
        <div className="flex justify-center">
          <div className="rounded-full p-4 flex items-center justify-center">
            <TbTrashXFilled className="text-gray-600" size={30} />
          </div>
        </div>
        <h1 className="text-lg text-center m-2 mb-8 text-white">
          Are you sure you want yo delete this tweet?{" "}
        </h1>
        <div className="flex justify-center gap-x-4">
          <button
            className="rounded-full text-base px-10 py-2 border border-red-300 text-white hover:bg-red-300"
            onClick={() => setIsDelete(false)}
          >
            No
          </button>
          <button
            className="rounded-full text-base px-10 py-2 border border-blue-400 text-white hover:bg-themeColor-1"
            onClick={handleDeleteTweet}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTweetConfirm;
