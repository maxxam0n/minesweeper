import PropTypes from 'prop-types';
import { Text } from 'react-konva';

const colors = {
  1: 'blue',
  2: 'green',
  3: 'red',
  4: 'darkblue',
  5: 'brown',
  6: 'darkturquoise',
  7: 'darkviolet',
  8: 'black',
};

export default function Count({ cell, size, coords }) {
  const [y, x] = coords;

  return (
    <Text
      fontSize={size * 0.8}
      fill={colors[cell.count]}
      text={cell.count}
      y={y + size / 12}
      x={x}
      width={size}
      height={size}
      align="center"
      verticalAlign="middle"
    />
  );
}

Count.propTypes = {
  cell: PropTypes.object,
  size: PropTypes.number,
  coords: PropTypes.array,
};
