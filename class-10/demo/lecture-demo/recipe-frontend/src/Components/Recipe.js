import React from 'react';
import { Card } from 'react-bootstrap';

class Recipe extends React.Component {

  render() {
    return (
      <Card style={{width: '18rem'}}>
        <Card.Title><a href={this.props.recipe.uri}>{this.props.recipe.name}</a></Card.Title>
        <Card.Img src={this.props.recipe.image_url} alt={this.props.name} title={this.props.name} />
        <ul>
          {this.props.recipe.ingredients.map(ingredient => (
            <li key={Math.random()}>{ingredient}</li>
          ))}
        </ul>
      </Card>
    )
  }
}

export default Recipe;