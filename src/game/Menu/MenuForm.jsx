import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { difficultyActions } from '../../store/difficultySlice';
import { useDifficulty } from '../../hooks/useDifficulty';
import { useForm } from '../../hooks/useForm';
import { formActions } from '../../store/formSlice';
import InputParameter from './InputParameter';

const MenuForm = () => {
  const { fields, invalidFields, isPermitted } = useForm();
  const { difficulties } = useDifficulty();
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    if (!isPermitted) return;
    const values = Object.values(fields);
    const name = values.join(' x ');
    if (difficulties.some(difficulty => difficulty.name === name)) {
      dispatch(difficultyActions.changeDifficulty(name));
    } else {
      dispatch(difficultyActions.addDifficulty({ name, parameters: fields }));
    }
  }

  function changeCols(e) {
    dispatch(formActions.changeCols(e.target.value));
  }

  function changeRows(e) {
    dispatch(formActions.changeRows(e.target.value));
  }

  function changeMines(e) {
    dispatch(formActions.changeMines(e.target.value));
  }

  function changeCoefficient(e) {
    dispatch(formActions.changeCoefficient(e.target.value));
  }

  const { cols, rows, mines } = fields;

  return (
    <div className="menu-form">
      <div className="fs-4 mb-3">Создайте свое поле</div>
      <Form onSubmit={submit}>
        <div className="d-flex gap-2 mb-3">
          <Form.Select onChange={changeCoefficient} className="py-2">
            <option value={0}>Подогнать сложность</option>
            <option value={1}>Легко</option>
            <option value={2}>Средне</option>
            <option value={3}>Тяжело</option>
          </Form.Select>
          <Button type="submit">Создать</Button>
        </div>
        <InputParameter
          value={cols}
          onChange={changeCols}
          name="cols"
          label="Количество колонок"
        />
        <InputParameter
          value={rows}
          onChange={changeRows}
          name="rows"
          label="Количество строк"
        />
        <InputParameter
          value={mines}
          onChange={changeMines}
          name="mines"
          label="Количество мин"
        />
      </Form>
    </div>
  );
};

export default MenuForm;
