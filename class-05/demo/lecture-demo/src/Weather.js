import React from "react";
import weatherData from "./data/weather.json"
import { Card, Row } from "react-bootstrap";

class Weather extends React.Component {
    render() {
        return (
            <Row>
                {weatherData.data.map((day,idx) => (
                    <Card key={idx} style={{width: '10rem'}}>
                        <Card.Text>temp: {day.temp}</Card.Text>
                        <Card.Text>description: {day.weather.description}</Card.Text>
                    </Card>
                ))}
            </Row>
        )
    }
}
export default Weather;