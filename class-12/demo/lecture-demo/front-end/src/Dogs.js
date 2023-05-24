import React from "react";
import { Container, Card, Row, Button } from "react-bootstrap";

class Dogs extends React.Component {
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
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Dogs;