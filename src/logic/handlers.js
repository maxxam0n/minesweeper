import { boardActions } from '../store/boardSlice';
import { getCoordsAround } from './createBoard';

export function handleOpenClick(dispatch, board, coords) {
  const [y, x] = coords;
  const target = board[y][x];

  if (target.isFlagged || target.isOpen) return;

  if (target.count > 0) {
    dispatch(boardActions.openCell(coords));
  }

  if (target.count === 0) {
    const parameters = { cols: board[0].length, rows: board.length };
    const cellsCoords = findEmptyCells(parameters, board, coords);
    dispatch(boardActions.openCells(cellsCoords));
  }

  if (target.isMine) {
    dispatch(boardActions.openMine(coords));
  }
}

function findEmptyCells(parameters, board, coords, emptyCells = []) {
  const [y, x] = coords;
  const isInclude = emptyCells.some(
    ([emptyY, emptyX]) => emptyY === y && emptyX === x
  );
  if (isInclude) return;

  emptyCells.push(coords);
  if (board[y][x].count === 0) {
    getCoordsAround(coords, parameters).forEach(coords => {
      findEmptyCells(parameters, board, coords, emptyCells);
    });
  }

  return emptyCells;
}

export function handleFlagClick(dispatch, board, coords) {
  const [y, x] = coords;
  if (board[y][x].isOpen) return;
  dispatch(boardActions.placeFlag(coords));
}
