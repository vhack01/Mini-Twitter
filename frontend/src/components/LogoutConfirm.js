const LogoutConfirm = ({ data }) => {
  const { setIsLogout, handleLogout } = data;
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-blackTransparent flex justify-center items-center pt-7">
      <div className="w-8/12 sm:w-5/12 lg:w-3/12  h-36 bg-dialogColor rounded p-4 pb-4">
        <h1 className="text-lg text-center m-2 mb-8 text-white">
          Are you sure?{" "}
        </h1>
        <div className="flex justify-center gap-x-8">
          <button
            className="rounded text-base px-10 py-2 bg-gray-300"
            onClick={() => setIsLogout(false)}
          >
            No
          </button>
          <button
            className="rounded text-base px-10 py-2 bg-themeColor-1 text-white"
            onClick={handleLogout}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirm;
