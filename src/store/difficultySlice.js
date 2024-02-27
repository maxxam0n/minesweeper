import { createSlice } from '@reduxjs/toolkit';

const initialDifficulty = {
  difficulties: [
    {
      name: 'Новичок',
      parameters: { rows: 10, cols: 10, mines: 10 },
      default: true,
    },
    {
      name: 'Опытный',
      parameters: { rows: 20, cols: 20, mines: 60 },
      default: true,
    },
    {
      name: 'Профи',
      parameters: { rows: 30, cols: 40, mines: 216 },
      default: true,
    },
  ],
  current: 'Новичок',
};

const difficultySlice = createSlice({
  name: 'difficulty',
  initialState: initialDifficulty,
  reducers: {
    addDifficulty(state, { payload: difficulty }) {
      state.difficulties.push(difficulty);
      state.current = difficulty.name;
    },
    deleteDifficulty(state, { payload: name }) {
      if (name === state.current) state.current = 'Новичок';
      state.difficulties = state.difficulties.filter(
        difficulty => difficulty.name !== name
      );
    },
    changeDifficulty(state, { payload: name }) {
      state.current = name;
    },
  },
});

export const { actions: difficultyActions, reducer: difficultyReducer } =
  difficultySlice;
