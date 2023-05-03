import React from "react";
import restaurantData from "./data/restaurants.json"
import { Card, Row } from "react-bootstrap";

class Restaurants extends React.Component {
    render() {
        return (
            <Row>
            {restaurantData.map((item, idx) => (
                    // <Card key={idx} style={{width: '10em'}}>
                    //     <Card.Title>{item.restaurant}</Card.Title>
                    //     <Card.Body>{`${item.cuisines} at ${item.locality}`}</Card.Body>
                    // </Card>
                    <>
                    <h1>{item.restaurant}</h1>
                    <p>{`${item.cuisines} at ${item.locality}`}</p>
                    </>
            ))}
            </Row>
        )
    }
}
export default Restaurants;