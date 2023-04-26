import React from "react";
import { Button, Modal } from "react-bootstrap";

class StudentModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.hideStudentModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.student.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={this.props.student.imgUrl} alt={this.props.student.name} /> {this.props.student.imgUrl}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.props.hideStudentModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default StudentModal;