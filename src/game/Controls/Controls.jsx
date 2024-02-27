import { useDispatch } from 'react-redux';
import { appearanceActions } from '../../store/appearanceSlice';
import { Button } from 'react-bootstrap';
import { useAppearance } from '../../hooks/useAppearance';

export default function Controls() {
  const { size } = useAppearance();
  const dispatch = useDispatch();

  function increaseSize() {
    dispatch(appearanceActions.changeSize(5));
  }

  function decreaseSize() {
    dispatch(appearanceActions.changeSize(-5));
  }

  return (
    <div className="flex-between gap-3">
      <Button className="px-3" disabled={size >= 40} onClick={increaseSize}>
        +
      </Button>
      <span className="no-select">{size}</span>
      <Button className="px-3" disabled={size <= 15} onClick={decreaseSize}>
        -
      </Button>
    </div>
  );
}
