import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSucess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.error = true;
      state.isLoading = false;
    },
    logOut:(state)=>{
      state.user = null
    }
  },
});

export const { loginFailure, loginStart, loginSucess ,logOut} = userSlice.actions;

export default userSlice.reducer;
