import DifficultiesList from './DifficultiesList';
import MenuForm from './MenuForm';
import { Offcanvas } from 'react-bootstrap';

const MenuBody = () => {
  return (
    <>
      <Offcanvas.Header closeButton className="flex-between">
        <Offcanvas.Title className="fs-4">Игровое меню</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <DifficultiesList />
        <MenuForm />
      </Offcanvas.Body>
    </>
  );
};

export default MenuBody;
