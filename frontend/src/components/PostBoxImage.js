import { BiX } from "react-icons/bi";

const PostBoxImage = ({ file, handleRemoveImage }) => {
  return (
    <div className="border rounded w-[40%] relative flex overflow-hidden p-2">
      <div
        className="p-1 border rounded-full absolute top-1 right-1 bg-white text-black hover:bg-black hover:text-white cursor-pointer"
        onClick={() => handleRemoveImage(file)}
      >
        <BiX />
      </div>
      <img
        src={URL.createObjectURL(file)}
        alt="uploadImage"
        className="object-cover rounded"
      />
    </div>
  );
};

export default PostBoxImage;
