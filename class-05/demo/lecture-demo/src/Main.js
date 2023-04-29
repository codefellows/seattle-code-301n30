import React from "react";
import { Button, Form } from "react-bootstrap";
import Map from "./Map";
import Restaurants from "./Restaurants";
import Weather from "./Weather";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false
        }
    }

    handleExplore = (e) => {
        e.preventDefault();
        this.setState({ displayInfo: true })
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleExplore}>
                    <Form.Group>
                        <Form.Label>Enter a city location for more information</Form.Label>
                        <Form.Control type="text" placeholder="static search... Will only display data for Seattle" />
                    </Form.Group>
                    <Button type="submit">Explore!</Button>
                </Form>
                {this.state.displayInfo &&
                    <>
                        <Weather />
                        <Map />
                        <Restaurants />
                    </>
                }
            </>
        )
    }
}

export default Main;