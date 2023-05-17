import React from 'react';
import axios from 'axios';

class IngredientForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ingredient: ''
    }
  }

  getRecipes = async (e) => {
    e.preventDefault();
    const config = {
      params: {
        ingredient: this.state.ingredient
      }
    }
    const recipes = await axios.get(`${process.env.REACT_APP_SERVER}/recipes`, config);
    this.props.updateRecipes(recipes.data);
  }

  render() {
    return (
        <form onSubmit={this.getRecipes}>
          <label>enter an ingredient</label>
          <input onChange={(e) => this.setState({ ingredient:e.target.value })} type="text" name="ingredient"></input>
          <button>submit</button>
        </form>
    )
  }
}

export default IngredientForm;