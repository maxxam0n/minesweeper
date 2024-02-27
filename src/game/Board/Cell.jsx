import { memo } from 'react';
import { Group } from 'react-konva';
import PropTypes from 'prop-types';
import Rectangle from './Rectangle';
import Count from './Count';
import Mine from './Mine';
import Flag from './Flag';

const Cell = ({ cell, size, y, x }) => {
  const boardCoords = [y * size, x * size];

  return (
    <Group>
      {<Rectangle cell={cell} size={size} coords={boardCoords} />}
      {cell.count > 0 && cell.isOpen && !cell.isMine && (
        <Count cell={cell} size={size} coords={boardCoords} />
      )}
      {cell.isMine && cell.isOpen && (
        <Mine cell={cell} size={size} coords={boardCoords} />
      )}
      {cell.isFlagged && <Flag cell={cell} size={size} coords={boardCoords} />}
    </Group>
  );
};

const MemoizedCell = memo(Cell);

export default MemoizedCell;

Cell.propTypes = {
  cell: PropTypes.object,
  size: PropTypes.number,
  y: PropTypes.number,
  x: PropTypes.number,
};
