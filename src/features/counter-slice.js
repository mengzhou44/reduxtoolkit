import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 3,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clearCount: (state) => {
      state.count = 0;
    },
    decreaseCount: (state, action) => {
      state.count = state.count - 1;
    },
    increaseCount: (state) => {
      state.count = state.count + 1;
    },
  },
});

console.log(counterSlice);

export const { clearCount, increaseCount, decreaseCount } =
  counterSlice.actions;

export default counterSlice.reducer;
