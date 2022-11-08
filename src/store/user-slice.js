import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    getAllUser: {
      allUser: [],
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getAllUserStart: (state) => {
        state.getAllUser.isFetching = true
    },
    getAllUserSuccess: (state, action) => {
        state.getAllUser.allUser = action.payload;
        state.getAllUser.isFetching = false
    },
    getAllUserFail: (state) => {
        state.getAllUser.error = true
    }
  },
});

export const { getAllUserStart, getAllUserSuccess, getAllUserFail } = userSlice.actions;

export default userSlice.reducer;
