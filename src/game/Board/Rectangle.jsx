import PropTypes from 'prop-types';
import { Rect } from 'react-konva';

export default function Rectangle({ cell, size, coords }) {
  const [y, x] = coords;

  const fillColor = cell.isOpen ? '#efefef' : cell.isMiss ? '#ff6e6e' : '#ccc';

  return (
    <Rect
      y={y}
      x={x}
      width={size}
      height={size}
      fill={fillColor}
      stroke="#fff"
    />
  );
}

Rectangle.propTypes = {
  cell: PropTypes.object,
  size: PropTypes.number,
  coords: PropTypes.array,
};
