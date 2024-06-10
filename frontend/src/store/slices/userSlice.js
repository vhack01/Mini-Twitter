import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    otherUser: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
  },
});

export const { getUser, getOtherUser } = userSlice.actions;
export default userSlice.reducer;
