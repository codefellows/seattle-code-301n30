import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./App.css"
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      photoData: []
    }
  }

  updateInput = (e) => this.setState({ userInput: e.target.value }, () => console.log(this.state.userInput))

  handleSearchPhoto = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_SERVER}/photos?searchQuery=${this.state.userInput}`
    console.log(url);
    const response = await axios.get(url);
    this.setState({ photoData: response.data })
    console.log(response.data);
  }

  render() {
    return (
      <>
        <h1>Unsplash API</h1>
        <Container>
          <Form onSubmit={this.handleSearchPhoto}>
            <Form.Group controlId="formUnsplash">
              <Form.Label>Search any image from the unsplash Database</Form.Label>
              <Form.Control type="text" onChange={this.updateInput} />
            </Form.Group>
            <Button type="submit">Search</Button>
          </Form>
        </Container>

        {this.state.photoData.length > 0 &&

          this.state.photoData.map(photo =>
            <>
              <img src={photo.imgURL} alt={photo.authorLink} />
            </>
          )

        }
      </>
    )
  }
}

export default App;