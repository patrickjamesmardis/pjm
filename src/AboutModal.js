import Modal from 'react-bootstrap/Modal'
import './css/modal.css'

function AboutModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="aboutModal" dialogClassName="modal-60w">
            <Modal.Header closeButton closeVariant={props.light ? "dark" : "white"} className={`bg-${props.light ? "light" : "dark"} text-${props.light ? "dark" : "light"} border-0`}>
                <Modal.Title id="projectModal">About Me</Modal.Title>
            </Modal.Header>
            <Modal.Body className={`bg-${props.light ? "light" : "dark"} text-${props.light ? "dark" : "light"} border-0`}>
                <p>I am a web and software developer based in Denver, CO. I'm currently studying Creative Technology + Design and Computer Science at The University of Colorado, Boulder.</p>
            </Modal.Body>
        </Modal>
    )
}

export default AboutModal;