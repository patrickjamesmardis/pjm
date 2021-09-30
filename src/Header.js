import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AboutModal from './AboutModal'
// TODO: dark/light react state to control dark/light

function Header(props) {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <Navbar bg={props.light ? "light" : "dark"} variant={props.light ? "light" : "dark"} expand="sm" className="d-flex justify-content-between px-5 pt-5">
        <div>
          <Navbar.Brand href="#home" className="fs-2">Patrick James Mardis</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey="/">
              <Nav.Link href="/" active>Projects</Nav.Link>
              <Nav.Link href="/#"
                onClick={() => {
                  setModalShow(true)
                }}
              >
                About
              </Nav.Link>
              <Nav.Link href="https://github.com/patrickjamesmardis" className="pe-0">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <AboutModal light={props.light} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;
