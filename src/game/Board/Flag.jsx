import PropTypes from 'prop-types';
import { Circle } from 'react-konva';

export default function Flag({ size, coords }) {
  const [y, x] = coords;

  return (
    <Circle
      fill="yellow"
      radius={size * 0.3}
      y={y + size / 2}
      x={x + size / 2}
    />
  );
}

Flag.propTypes = {
  size: PropTypes.number,
  coords: PropTypes.array,
};
