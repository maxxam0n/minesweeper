export default function createBoard(parameters) {
  const { cols, rows } = parameters;

  const initialBoard = Array.from({ length: rows }, () => {
    return Array.from({ length: cols }, () => {
      return { isMine: false, isOpen: false, count: 0, isFlagged: false };
    });
  });

  return layMines(initialBoard, parameters);
}

function layMines(board, parameters) {
  const { cols, rows, mines } = parameters;

  let minesPlaced = 0;

  while (minesPlaced < mines) {
    const randomY = Math.floor(Math.random() * rows);
    const randomX = Math.floor(Math.random() * cols);
    const cell = board[randomY][randomX];

    if (cell.isMine) continue;

    cell.isMine = true;
    delete cell.count;
    minesPlaced += 1;

    getCoordsAround([randomY, randomX], parameters).forEach(([y, x]) => {
      if (!board[y][x].isMine) {
        board[y][x].count += 1;
      }
    });
  }

  return board;
}

export function getCoordsAround(coords, parameters) {
  const [centerY, centerX] = coords;
  const { cols, rows } = parameters;

  const cellsAround = [];
  const minY = Math.max(0, centerY - 1);
  const minX = Math.max(0, centerX - 1);
  const maxY = Math.min(rows - 1, centerY + 1);
  const maxX = Math.min(cols - 1, centerX + 1);

  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      cellsAround.push([y, x]);
    }
  }

  return cellsAround;
}
