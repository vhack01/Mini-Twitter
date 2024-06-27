import { LOGO } from "../utils/constants";

const BigLogo = () => {
  return (
    <div className="flex justify-start items-center px-4">
      <img src={LOGO} alt="logo" className="w-[20%] md:w-[90%]" />
    </div>
  );
};

export default BigLogo;
