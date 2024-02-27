import Difficulty from './Difficulty';
import { useDifficulty } from '../../hooks/useDifficulty';

const DifficultiesList = () => {
  const { current, difficulties } = useDifficulty();

  return (
    <div className="menu-difficulties">
      {difficulties.map(difficulty => (
        <Difficulty
          key={difficulty.name}
          isCurrent={current.name === difficulty.name}
          difficulty={difficulty}
        />
      ))}
    </div>
  );
};

export default DifficultiesList;
