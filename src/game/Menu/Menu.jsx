import MenuBody from './MenuBody';
import Controls from '../Controls/Controls';
import { Container, Navbar } from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar expand={false} className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand className="fs-3 m-0">Сапер</Navbar.Brand>
        <Controls />
        <Navbar.Toggle />
        <Navbar.Offcanvas scroll={true} backdrop={false}>
          <MenuBody />
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
