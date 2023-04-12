

import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';

const Navbarr=()=>{
   return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">NUMER TOPIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title='ROOT OF EQUATION'>
                 <NavDropdown.Item href='/bisection'>BISECTION</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='LINEAR ALGEBRA'>
                 <NavDropdown.Item>CRAMER RULE</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='INTERPOLATION'>
                 <NavDropdown.Item>NEWTON DIVIDED DIFFERENCE</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='LEAST SQUARE REGRESSION'>
                 <NavDropdown.Item>LINEAR REGRESSION</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='INTEGRATE'>
                 <NavDropdown.Item>TRAPZOIDAL</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   )
}

export default Navbarr;