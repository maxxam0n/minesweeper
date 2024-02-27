import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';

const InputParameter = ({ name, max, label, ...props }) => {
  return (
    <FloatingLabel className="mb-3" label={label} controlId={`${name}Count`}>
      <Form.Control {...props} name={name} type="number" min={10} max={max} />
    </FloatingLabel>
  );
};

InputParameter.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  max: PropTypes.number,
};

export default InputParameter;
