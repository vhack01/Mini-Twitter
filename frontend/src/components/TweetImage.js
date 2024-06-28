const TweetImage = ({ image }) => {
  return (
    <div className="">
      <img
        src={image?.url || image?.secure_url}
        alt=""
        className="rounded w-[80%]"
      />
    </div>
  );
};

export default TweetImage;
