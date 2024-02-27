import { createSlice } from '@reduxjs/toolkit';
import { boardActions } from './boardSlice';

const gameSlice = createSlice({
  name: 'game',
  initialState: { status: null, startTime: 0, now: 0 },
  reducers: {
    nullGame(state) {
      state.status = null;
      state.startTime = 0;
      state.now = 0;
    },
    startGame: {
      reducer: (state, { payload }) => {
        state.status = 'GAME_STARTED';
        state.startTime = payload.startTime;
        state.now = payload.now;
      },
      prepare: () => ({
        payload: {
          startTime: Date.now(),
          now: Date.now(),
        },
      }),
    },
    winGame(state) {
      state.status = 'WIN';
    },
    loseGame(state) {
      state.status = 'LOSE';
    },
    tick: {
      reducer: (state, { payload }) => {
        state.now = payload.now;
      },
      prepare: () => ({ payload: { now: Date.now() } }),
    },
  },
  extraReducers: builder => {
    builder
      .addCase(boardActions.createBoard, state => {
        state.status = null;
        state.startTime = 0;
        state.now = 0;
      })
      .addCase(boardActions.openMine, state => {
        state.status = 'LOSE';
      });
  },
});

export const { actions: gameActions, reducer: gameReducer } = gameSlice;
