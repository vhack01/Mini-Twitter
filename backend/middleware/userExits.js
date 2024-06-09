import { USER } from "../models/userSchema.js";

export const userExist = async ({ username, email }) => {
  const isExisting = await USER.findOne({ email });
  console.log("isExisting:", isExisting);
  if (isExisting) {
    return true;
  }
  return false;
};
