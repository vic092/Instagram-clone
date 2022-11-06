import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("Value"),
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("Value", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    multiplyX2: (state) => {
      state.value = state.value * 2;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiplyX2 } =
  counterSlice.actions;

export default counterSlice.reducer;
