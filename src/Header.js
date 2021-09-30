import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// TODO: dark/light react state to control dark/light

const bg = "dark"
function Header() {
  return (
    <Navbar bg={bg} variant={bg} expand="sm" className="d-flex justify-content-between px-5 pt-5">
      <div>
        <Navbar.Brand href="#home" className="fs-2">Patrick James Mardis</Navbar.Brand>
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
