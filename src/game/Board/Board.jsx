import Cell from './Cell';
import { useDispatch } from 'react-redux';
import { handleFlagClick, handleOpenClick } from '../../logic/handlers';
import { getCoords } from '../../logic/helpers';
import { Layer, Rect, Stage } from 'react-konva';
import { gameActions } from '../../store/gameSlice';
import { useBoard } from '../../hooks/useBoard';
import { useGame } from '../../hooks/useGame';
import { useAppearance } from '../../hooks/useAppearance';
import { useDifficulty } from '../../hooks/useDifficulty';
import { useEffect } from 'react';

export default function Board() {
  const { status } = useGame();
  const { data, openCells } = useBoard();
  const { current } = useDifficulty();
  const { cols, rows, mines } = current.parameters;
  const { size, width, height } = useAppearance(cols, rows);

  const dispatch = useDispatch();

  useEffect(() => {
    if (openCells === rows * cols - mines && status !== 'LOSE') {
      dispatch(gameActions.winGame());
    }
  }, [openCells]);

  function gameHandler(e, cb) {
    if (status === 'LOSE' || status === 'WIN') return;
    else if (status !== 'GAME_STARTED') {
      dispatch(gameActions.startGame());
    }
    const coords = getCoords(e, size);
    cb(dispatch, data, coords);
  }

  function openCell(e) {
    if (e.evt.button === 0) {
      gameHandler(e, handleOpenClick);
    }
  }

  function detectMine(e) {
    e.evt.preventDefault();
    if (e.evt.button === 2) {
      gameHandler(e, handleFlagClick);
    }
  }

  return (
    <Stage className="board rounded" width={width} height={height}>
      <Layer onClick={openCell} onContextMenu={detectMine}>
        {data ? (
          data.flatMap((row, y) =>
            row.map((cell, x) => (
              <Cell key={`${y}-${x}`} size={size} cell={cell} y={y} x={x} />
            ))
          )
        ) : (
          <Rect width={width} height={height} fill="#ccc" />
        )}
      </Layer>
    </Stage>
  );
}
