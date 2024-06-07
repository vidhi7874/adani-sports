import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentRouteState = {
  currentActiveRoute: string;
};

const initialState = {
    currentActiveRoute: "",
} as currentRouteState;

export const currentRoute = createSlice({
  name: "currentRoute",
  initialState,
  reducers: {
    reset: () => initialState,

    setCurrentRouteSlice: (state, action: PayloadAction<string>) => {
      state.currentActiveRoute = action.payload;
    },
  },
});

export const { setCurrentRouteSlice, reset } = currentRoute.actions;
export default currentRoute.reducer;
