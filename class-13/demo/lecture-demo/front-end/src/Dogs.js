import React from "react";
import { Container, Card, Row, Button } from "react-bootstrap";
import UpdateForm from "./UpdateForm";

class Dogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedDog: {}
        }
    }

    showUpdateModal = (dog) => this.setState({ showModal: true, selectedDog: dog })
    closeUpdateModal = () => this.setState({ showModal: false })


    render() {
        const { dogs } = this.props;
        return (
            <>
                <Container>
                    <Row className="justify-content-md-center">
                        {dogs.map((dog, idx) => (
                            <Card key={dog._id} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{dog.name}</Card.Title>
                                    <Card.Text>Color: {dog.color}</Card.Text>
                                    <Card.Text>Location: {dog.location}</Card.Text>
                                    <Button variant="success" onClick={() => this.props.deleteDog(dog)}>Adopt!</Button>
                                    <Button variant="secondary" onClick={() => this.showUpdateModal(dog)}>Update</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
                <UpdateForm
                    showModal={this.state.showModal}
                    closeUpdateModal={this.closeUpdateModal}
                    selectedDog={this.state.selectedDog}
                    updateDog={this.props.updateDog}
                />
            </>
        )
    }
}

export default Dogs;