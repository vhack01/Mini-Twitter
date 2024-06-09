import { USER } from "../models/userSchema.js";

export const validateUser = async ({ username, password }) => {
  const isValid = await USER.findOne({ username, password });
  console.log("isvalid:", isValid);
  if (isValid) {
    return true;
  }
  return false;
};
