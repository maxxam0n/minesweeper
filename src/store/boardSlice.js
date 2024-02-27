import { createSlice } from '@reduxjs/toolkit';

const initialBoardData = {
  data: null,
  flagsPlaced: 0,
  openCells: 0,
};

const boardSlice = createSlice({
  name: 'board',
  initialState: initialBoardData,
  reducers: {
    openCell(state, { payload: coords }) {
      const [y, x] = coords;
      state.data[y][x].isOpen = true;
      state.openCells += 1;
    },
    openCells(state, { payload: cellsCoords }) {
      cellsCoords.forEach(([y, x]) => {
        const target = state.data[y][x];
        if (!target.isOpen) {
          target.isOpen = true;
          state.openCells += 1;
        }
        if (target.isFlagged) {
          state.data[y][x].isFlagged = false;
          state.flagsPlaced -= 1;
        }
      });
    },
    openMine(state, { payload: coords }) {
      const [clickedY, clickedX] = coords;
      state.data.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell.isMine) {
            cell.isOpen = !cell.isFlagged;
            cell.isClicked = x === clickedX && y === clickedY;
          }
          if (cell.isFlagged) {
            cell.isMiss = !cell.isMine;
          }
        });
      });
    },
    placeFlag(state, { payload: coords }) {
      const [y, x] = coords;
      const target = state.data[y][x];
      if (target.isFlagged) {
        target.isFlagged = false;
        state.flagsPlaced -= 1;
      } else {
        target.isFlagged = true;
        state.flagsPlaced += 1;
      }
    },
    createBoard(state, { payload: data }) {
      state.data = data;
      state.flagsPlaced = 0;
      state.openCells = 0;
    },
  },
});

export const { actions: boardActions, reducer: boardReducer } = boardSlice;
