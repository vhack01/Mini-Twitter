const Tabs = () => {
  return (
    <div className="flex border-b border-t">
      <div className="w-[50%] hover:bg-gray-100 cursor-pointer p-2 text-center">
        For you
      </div>
      <div className="w-[50%] hover:bg-gray-100 cursor-pointer p-2 text-center">
        Following
      </div>
    </div>
  );
};

export default Tabs;
