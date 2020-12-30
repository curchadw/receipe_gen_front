import React, {Component} from 'react';
import Recipe from 

class RecipeList extends Component {
  listRecipes = () => {
    return this.props.recipes.map(recipe => <Recipe key={recipe.id} name={recipe.name}  />)
  }

  render() {
    return (
      <div>
        {this.listRecipes()}
      </div>
    )
  }
}

export default RecipeList;