import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// TODO: dark/light react state to control dark/light

const darkMode = "dark"
function Header() {
  return (
    <Navbar bg={darkMode} variant={darkMode} expand="sm" className="d-flex justify-content-between px-4">
      <div>
        <Navbar.Brand href="#home" className="text-white">Patrick James Mardis</Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Projects</Nav.Link>
            <Nav.Link href="about.html" className="pe-0">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
