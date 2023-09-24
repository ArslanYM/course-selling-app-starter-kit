import { selector } from "recoil";
import { userState } from "../atoms/user";

export const userEmail = selector({
  key: "userEmail",
  get: ({ get }) => {
    const state = get(userState);
    return state.userEmail;
  },
});
