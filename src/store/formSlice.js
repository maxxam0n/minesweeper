import { createSlice } from '@reduxjs/toolkit';

const initialForm = {
  coefficient: 0,
  fields: { cols: '', rows: '', mines: '' },
  invalidFields: {},
};

const getMineCount = (difficulty, cols, rows) => {
  switch (difficulty) {
    case 1:
      return Math.floor(cols * rows * 0.12);
    case 2:
      return Math.floor(cols * rows * 0.15);
    case 3:
      return Math.floor(cols * rows * 0.18);
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialForm,
  reducers: {
    changeCols({ coefficient, fields }, { payload: cols }) {
      fields.cols = cols;
      if (coefficient > 0) {
        fields.mines = getMineCount(coefficient, fields.rows, cols);
      }
    },
    changeRows({ coefficient, fields }, { payload: rows }) {
      fields.rows = rows;
      if (coefficient > 0) {
        fields.mines = getMineCount(coefficient, rows, fields.cols);
      }
    },
    changeMines(state, { payload: mines }) {
      if (state.coefficient > 0) return state;
      state.fields.mines = mines;
    },
    changeCoefficient(state, { payload: coefficient }) {
      state.coefficient = +coefficient;
      const { fields } = state;
      fields.mines = getMineCount(+coefficient, fields.rows, fields.cols);
    },
  },
});

export const { actions: formActions, reducer: formReducer } = formSlice;
