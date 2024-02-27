import PropTypes from 'prop-types';
import easyFieldImg from '../../images/easy-field.jpg';
import middleFieldImg from '../../images/middle-field.jpg';
import hardFieldImg from '../../images/hard-field.jpg';
import Bin from '../../images/svg/bin.svg?react';
import { useDispatch } from 'react-redux';
import { difficultyActions } from '../../store/difficultySlice';
import { Badge } from 'react-bootstrap';

export default function Difficulty({ isCurrent, difficulty }) {
  const dispatch = useDispatch();

  function changeDifficulty() {
    if (isCurrent) return;
    dispatch(difficultyActions.changeDifficulty(difficulty.name));
  }

  function deleteDifficulty(e) {
    e.stopPropagation();
    dispatch(difficultyActions.deleteDifficulty(difficulty.name));
  }

  const { cols, rows, mines } = difficulty.parameters;
  const coefficient = mines / (cols * rows);

  const imgSrc =
    coefficient <= 0.12
      ? easyFieldImg
      : coefficient <= 0.15
      ? middleFieldImg
      : hardFieldImg;

  return (
    <div className="difficulty" role="button" onClick={changeDifficulty}>
      <Badge
        bg={isCurrent ? 'primary' : 'secondary'}
        className="mb-2 w-100 py-2 fs-6 difficulty-name"
      >
        {difficulty.name}
        {!difficulty.default && (
          <Bin className="close" onClick={deleteDifficulty} />
        )}
      </Badge>
      <img className="img-fluid" src={imgSrc} alt="board" />
    </div>
  );
}

Difficulty.propTypes = {
  isCurrent: PropTypes.bool,
  difficulty: PropTypes.object,
};
