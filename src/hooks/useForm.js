import { useSelector } from 'react-redux';

export const useForm = () => {
  const { coefficient, fields, invalidFields } = useSelector(
    state => state.form
  );

  const isPermitted = invalidFields.length === 0;
  return { isPermitted, coefficient, fields, invalidFields };
};
