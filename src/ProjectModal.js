import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import './css/modal.css'
function ProjectModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="projectModal" dialogClassName="modal-60w" centered>
            <Modal.Header closeButton closeVariant={props.light ? "dark" : "white"} className={`bg-${props.light ? "light" : "dark"} text-${props.light ? "dark" : "light"} border-0`}>
                <Modal.Title id="projectModal">{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={`bg-${props.light ? "light" : "dark"} text-${props.light ? "dark" : "light"} border-0`}>
                <Image src={props.img} className="w-100 pb-4" />
                <p>{props.description}</p>
            </Modal.Body>
            <Modal.Footer className={`bg-${props.light ? "light" : "dark"} text-${props.light ? "dark" : "light"} border-0`}>
                <Button href={props.linkhref} variant={props.light ? "dark" : "light"}>{props.linktext}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProjectModal;