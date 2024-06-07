import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  isLogin: boolean;
};

const initialState = {
  isLogin: false,
} as CounterState;

export const checkAuthUser = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    reset: () => initialState,

    isNowLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { isNowLogin, reset } = checkAuthUser.actions;
export default checkAuthUser.reducer;
