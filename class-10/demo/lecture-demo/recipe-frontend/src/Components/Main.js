import React from 'react';
import IngredientForm from './IngredientForm';
import Recipe from './Recipe';
import { Container, Row } from 'react-bootstrap';
import '../Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  updateRecipes = (recipes) => this.setState({ recipes });

  render() {
    return (
      <>
        <IngredientForm updateRecipes={this.updateRecipes} />
        <Container>
          <Row>
            {this.state.recipes.length > 0 &&
              this.state.recipes.map((recipe, idx) =>
                <Recipe recipe={recipe} key={idx} />
              )}
          </Row>
        </Container>
      </>
    )
  }
}

export default Main;