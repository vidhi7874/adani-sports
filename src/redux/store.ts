import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import checkAuthUserReducer from "./features/checkAuthUserSlice";
import bookingSliceReducer from "./features/bookingSlice";
import currentRouteReducer from "./features/currentRouteSlice";
import { userApi } from "./redux-services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// test
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    counterReducer,
    checkAuthUserReducer,
    bookingSliceReducer,
    currentRouteReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
