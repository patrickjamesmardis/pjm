import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './css/project.css'

import ProjectsData from './ProjectsData'

import ProjectModal from './ProjectModal'
// TODO: dark/light react state to control dark/light


function Projects(props) {
  const [modalShow, setModalShow] = React.useState(false)
  const [modalTitle, setModalTitle] = React.useState()
  const [modalText, setModalText] = React.useState()
  const [modalImage, setModalImage] = React.useState()
  const [modalLinkHref, setModalLinkHref] = React.useState()
  const [modalLinkText, setModalLinkText] = React.useState()

  const ProjectElements = ProjectsData.map(project => {
    return (
      <Col className="my-md-5">
        <div className="d-flex justify-content-center aligh-items-center w-100">
          <Image
            src={project.imgSrc}
            alt={project.alt}
            rounded
            className="w-75 h-auto projectImg my-5"
            onMouseEnter={e => e.target.style.transform = "scale(1.2)"}
            onMouseLeave={e => e.target.style.transform = "scale(1)"}
            onClick={() => {
              setModalImage(project.imgSrc);
              setModalTitle(project.name);
              setModalText(project.description);
              setModalLinkHref(project.linkHref);
              setModalLinkText(project.linkText);
              setModalShow(true);
            }}
          />
        </div>
        <h3 className="ps-5">{project.name}</h3>
      </Col>
    )
  })

  return (
    <>
      <Container fluid className={`bg-${props.light ? "light" : "dark"} text-${props.light ? "dark" : "light"} pb-5`}>
        <Row className="d-flex flex-wrap" xs="1" sm="1" md="1" lg="2">
          {ProjectElements[0]}
          {ProjectElements[1]}
        </Row>
        <Row className="d-flex flex-wrap" xs="1" sm="1" md="1" lg="2">
          {ProjectElements[2]}
          {ProjectElements[3]}
        </Row>
      </Container>
      <ProjectModal
        show={modalShow}
        description={modalText}
        title={modalTitle}
        img={modalImage}
        linkhref={modalLinkHref}
        linktext={modalLinkText}
        light={props.light}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Projects;
