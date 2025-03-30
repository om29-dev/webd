import { Link } from 'react-router';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom">
      <Container>
        <Link to='/' className="text-decoration-none"> {/* Add class here */}
          <Navbar.Brand className="fw-bold text-primary">
            MyAwesomeApp
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link to='/login'>
              <Button
                variant="outline-primary"
                className="me-2 rounded-pill px-4"
              >
                Login
              </Button>
            </Link>
            <Link to='/signup'>
              <Button
                variant="outline-primary"
                className="rounded-pill px-4"
              >
                Sign Up
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;