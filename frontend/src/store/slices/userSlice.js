import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUser: null,
    profile: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("setUser:", action.payload);
      state.user = action.payload;
    },
    setOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setUser, setOtherUser, setProfile } = userSlice.actions;
export default userSlice.reducer;
