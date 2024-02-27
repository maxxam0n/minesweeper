import { useSelector } from 'react-redux';

export const useBoard = () => useSelector(state => state.board);
