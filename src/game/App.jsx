import Board from './Board/Board';
import createBoard from '../logic/createBoard';
import GameBar from './GameBar/GameBar';
import Menu from './Menu/Menu';
import { useDispatch } from 'react-redux';
import { boardActions } from '../store/boardSlice';
import { useEffect } from 'react';
import { useDifficulty } from '../hooks/useDifficulty';

function App() {
  const { current } = useDifficulty();

  const dispatch = useDispatch();

  useEffect(() => {
    const boardData = createBoard(current.parameters);
    dispatch(boardActions.createBoard(boardData));
  }, [current, dispatch]);

  return (
    <>
      <Menu />
      <div className="game-wrapper flex-center">
        <div className="game">
          <GameBar />
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
