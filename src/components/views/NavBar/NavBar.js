import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
      <Navbar.Brand className="ms-2 ">Waiter.app</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} to="/" className="ms-1 me-2">Home</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;