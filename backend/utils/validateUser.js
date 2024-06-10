import { USER } from "../models/userSchema.js";

export const validateUser = async ({ username, password }) => {
  const user = await USER.findOne({ username, password });
  if (user) {
    return user;
  }
  return null;
};
