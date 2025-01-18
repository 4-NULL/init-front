import { debug } from "util";

// src/shared/utils/loaderUtils.js
export const withUser = (loaderFn) => async (args) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return null;
  }
  return loaderFn({ ...args, user });
};
