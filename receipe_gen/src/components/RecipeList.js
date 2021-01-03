import React, {Component} from 'react';
import Recipe from './Recipe'
import { Route } from 'react-router-dom'

class RecipeList extends Component {
  // listRecipes = () => {
  //   return this.props.recipes.map(recipe =><Router> <Route path=`/recipes/${recipe.id}`> <Recipe key={recipe.id} name={recipe.name}  /></Route></Router)
  // }

 

  render() {
    return (
      <div>
        {/* {this.listRecipes()} */}
      </div>
    )
  }
}

export default RecipeList;