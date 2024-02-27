import createBoard from '../../logic/createBoard';
import Clock from '../../images/svg/clock.svg?react';
import Flag from '../../images/svg/flag.svg?react';
import { useDispatch } from 'react-redux';
import { boardActions } from '../../store/boardSlice';
import { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useGame } from '../../hooks/useGame';
import { useBoard } from '../../hooks/useBoard';
import { useDifficulty } from '../../hooks/useDifficulty';
import { gameActions } from '../../store/gameSlice';

export default function GameBar() {
  const { status, startTime, now } = useGame();
  const { flagsPlaced } = useBoard();
  const { current } = useDifficulty();
  const { mines } = current.parameters;
  const timerRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'GAME_STARTED' && !timerRef.current) {
      timerRef.current = setInterval(() => {
        dispatch(gameActions.tick());
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [status, dispatch]);

  function restartGame() {
    const boardData = createBoard(current.parameters);
    dispatch(boardActions.createBoard(boardData));
  }

  const variant =
    status === 'WIN' ? 'success' : status === 'LOSE' ? 'danger' : 'primary';

  return (
    <div className="game-bar flex-between py-1 px-2 mb-2 bg-light rounded border">
      <span className="fs-5 p-2">
        <Flag />
        {mines - flagsPlaced}
      </span>
      <Button onClick={restartGame} variant={variant}>
        Заново
      </Button>
      <span className="fs-5 p-2">
        <Clock />
        {Math.floor((now - startTime) / 1000)}
      </span>
    </div>
  );
}
