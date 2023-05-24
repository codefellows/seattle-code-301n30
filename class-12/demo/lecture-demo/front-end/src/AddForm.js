import React from "react";
import { Form, Container, Button } from "react-bootstrap";

class AddForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        const newDog = {
            name: e.target.name.value,
            color: e.target.color.value,
            location: e.target.location.value,
            age: e.target.age.value,
            longTail: e.target.longTail.checked
        }
        this.props.postDogs(newDog);
    }

    render() {
        return (

            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Dog's Name</Form.Label>
                        <Form.Control type="text" placeholder="Dog name goes here..." />
                    </Form.Group>

                    <Form.Group controlId="color">
                        <Form.Label>Dog's Color</Form.Label>
                        <Form.Control type="text" placeholder="What color is your dog..." />
                    </Form.Group>

                    <Form.Group controlId="location">
                        <Form.Label>Dog's Location</Form.Label>
                        <Form.Control type="text" placeholder="Where is your dog from..." />
                    </Form.Group>
                    
                    <Form.Group controlId="age">
                        <Form.Label>Dog's Age</Form.Label>
                        <Form.Control type="number" placeholder="How old your dog..." />
                    </Form.Group>

                    <Form.Group controlId="longTail">
                        <Form.Check type="checkbox" label="Has Long Tail?" />
                    </Form.Group>

                    <Button type="submit">Add Dog</Button>
                </Form>
            </Container>

        )
    }
}

export default AddForm;