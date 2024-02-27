import PropTypes from 'prop-types';
import { Circle } from 'react-konva';

export default function Mine({ cell, size, coords }) {
  const [y, x] = coords;

  const fillColor = cell.isClicked ? '#ff0000' : '#000';

  return (
    <Circle
      fill={fillColor}
      radius={size * 0.3}
      y={y + size / 2}
      x={x + size / 2}
    />
  );
}

Mine.propTypes = {
  cell: PropTypes.object,
  size: PropTypes.number,
  coords: PropTypes.array,
};
