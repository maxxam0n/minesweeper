import { useSelector } from 'react-redux';

export const useDifficulty = () => {
  const { current: currentName = 'Новичок', difficulties } = useSelector(
    state => state.difficulty
  );

  const current = difficulties.find(
    difficulty => difficulty.name === currentName
  );

  return { current, difficulties };
};
