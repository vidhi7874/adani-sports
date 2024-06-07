import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type bookingState = {
  bookingData: object;
  cartData: any;
  cartItems: any;
  showCountDownTimer: boolean;
  mySlots: any;
  deletingSlotDetected: any;
  isCartForceFullyZero: boolean;
};

const initialState = {
  bookingData: {},
  cartData: [],
  cartItems: 0,
  showCountDownTimer: false,
  mySlots: [],
  deletingSlotDetected: 0,
  isCartForceFullyZero: false,
} as bookingState;

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    reset: () => initialState,
    setBookingData: (state, action: PayloadAction<any>) => {
      state.bookingData = action.payload;
    },

    cardDAta: (state, action: PayloadAction<any>) => {
      state.cartData = action.payload;
    },

    totalCartItems: (state, action: PayloadAction<any>) => {
      state.cartItems = action.payload + 1 || 0;
    },

    selectedMySlots: (state, action: PayloadAction<any>) => {
      state.mySlots = action.payload;
    },
    detectedDeletedSlot: (state, action: PayloadAction<any>) => {
      state.deletingSlotDetected = action.payload;
    },
    countDownTimer: (state, action: PayloadAction<any>) => {
      state.showCountDownTimer = action.payload;
    },
    seCartItemForceFullyZero: (state, action: PayloadAction<any>) => {
      state.isCartForceFullyZero = action.payload;
    },
  },
});

export const {
  setBookingData,
  cardDAta,
  totalCartItems,
  countDownTimer,
  selectedMySlots,
  detectedDeletedSlot,
  seCartItemForceFullyZero,
  reset,
} = bookingSlice.actions;
export default bookingSlice.reducer;
