import { createSlice } from '@reduxjs/toolkit';

const appearanceSlice = createSlice({
  name: 'appearance',
  initialState: { size: 30 },
  reducers: {
    changeSize(state, { payload: slice }) {
      state.size = state.size + slice;
    },
  },
});

export const { actions: appearanceActions, reducer: appearanceReducer } =
  appearanceSlice;
