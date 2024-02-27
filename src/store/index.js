import { configureStore } from '@reduxjs/toolkit';
import { gameReducer } from './gameSlice';
import { boardReducer } from './boardSlice';
import { difficultyReducer } from './difficultySlice';
import { appearanceReducer } from './appearanceSlice';
import { formReducer } from './formSlice';

export const store = configureStore({
  reducer: {
    appearance: appearanceReducer,
    difficulty: difficultyReducer,
    board: boardReducer,
    game: gameReducer,
    form: formReducer,
  },
});
