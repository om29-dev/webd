
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Header.css'
import { Navbar, Container, Button, Nav } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar className="bg-body-secondary">
        <Container>
          <Navbar.Brand href='/' className='justify-content-start'>Journey</Navbar.Brand>
          <Nav className='justify-content-end'>
              <Button variant='primary'>Login</Button>
              <Button variant='outline-primary'>Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;