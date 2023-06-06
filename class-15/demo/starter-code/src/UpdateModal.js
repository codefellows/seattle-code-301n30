import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class UpdateModal extends React.Component{

  handleBookSubmit = (e) =>{
    e.preventDefault();
    let updatedBook = {
      title: e.target.title.value || this.props.bookToUpdate.title,
      description: e.target.description.value || this.props.bookToUpdate.description,
      status: e.target.status.value || this.props.bookToUpdate.status,
      _id: this.props.bookToUpdate._id
    }
    this.props.putBook(updatedBook);
  }

  render(){
    return(
      <Modal show={this.props.updateModal} onHide={this.props.hideUpdateModal}>
        <Modal.Header closeButton><Modal.Title>Add Book</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleBookSubmit}>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' placeholder={this.props.bookToUpdate.title} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control type='text' placeholder={this.props.bookToUpdate.description} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='status'>
              <Form.Label>Status</Form.Label>
              <Form.Control type='text' placeholder={this.props.bookToUpdate.status} />
            </Form.Group>
            <Button onClick={this.props.hideUpdateModal} type='submit'>Save Book</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default UpdateModal;