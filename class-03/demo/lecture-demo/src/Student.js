import React from "react";
import {Card, Button} from "react-bootstrap"

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            helloCounter: 0
        }
    }

    incrementHello = () => {
        this.setState({
            helloCounter: this.state.helloCounter + 1
        })
        this.props.addHeart();
    }

    handleModalEvent = () => {
        this.props.selectedStudent(this.props.student);
        this.props.showStudentModal();
    }

    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imageUrl} onClick={this.handleModalEvent} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                    {this.state.helloCounter} times
                    </Card.Text>
                    <Button variant="primary" onClick={this.incrementHello}>Say Hello</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Student;