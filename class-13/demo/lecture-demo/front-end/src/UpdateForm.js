import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class UpdateForm extends React.Component {

    handleSubmit = (e) =>{
        e.preventDefault();
        const updatedDog = {
            name: e.target.name.value || this.props.selectedDog.name,
            color: e.target.color.value || this.props.selectedDog.color,
            location: e.target.location.value || this.props.selectedDog.location,
            age: e.target.age.value || this.props.selectedDog.age,
            longTail: e.target.longTail.checked,
            _id: this.props.selectedDog._id
        }
        this.props.updateDog(updatedDog);
        this.props.closeUpdateModal();
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color: 'black'}}>Update Dog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Dog's Name</Form.Label>
                            <Form.Control type="text" placeholder={this.props.selectedDog.name} />
                        </Form.Group>

                        <Form.Group controlId="color">
                            <Form.Label>Dog's Color</Form.Label>
                            <Form.Control type="text" placeholder={this.props.selectedDog.color} />
                        </Form.Group>

                        <Form.Group controlId="location">
                            <Form.Label>Dog's Location</Form.Label>
                            <Form.Control type="text" placeholder={this.props.selectedDog.location} />
                        </Form.Group>

                        <Form.Group controlId="age">
                            <Form.Label>Dog's Age</Form.Label>
                            <Form.Control type="number" placeholder={this.props.selectedDog.age} />
                        </Form.Group>

                        <Form.Group controlId="longTail">
                            <Form.Check type="checkbox" label="Has Long Tail?" />
                        </Form.Group>

                        <Button type="submit">Update Dog</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default UpdateForm;