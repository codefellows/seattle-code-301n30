import React from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
            city: '',
            cityName: ''
        }
    }

    handleInput = (e) => {
        this.setState({ city: e.target.value }
            , () => console.log(this.state.city)
        );
    }

    handleExplore = async (e) => {
        e.preventDefault();
        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
        const response = await axios.get(url)
        console.log(response.data[0]);
        this.setState({ 
            displayInfo: true,
            cityName: response.data[0].display_name
         })
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleExplore}>
                    <Form.Group>
                        <Form.Label>Enter a city location for more information</Form.Label>
                        <Form.Control type="text" onChange={this.handleInput} />
                    </Form.Group>
                    <Button type="submit">Explore!</Button>
                </Form>
                {this.state.displayInfo &&
                    <>
                        <p>{this.state.cityName}</p>
                    </>
                }
            </>
        )
    }
}

export default Main;