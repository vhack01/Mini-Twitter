const FeedHeader = ({ heading = "", username = "" }) => {
  return (
    <div className="border px-4">
      <h1 className="text-2xl font-bold">{heading}</h1>
      <h1 className="text-sm text-gray-500">@{username}</h1>
    </div>
  );
};

export default FeedHeader;
