import { useSelector } from 'react-redux';

export const useAppearance = (cols = 1, rows = 1) => {
  const { size } = useSelector(state => state.appearance);
  const width = cols * size;
  const height = rows * size;

  return { size, width, height };
};
