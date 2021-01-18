import React, {Component} from 'react';
// import { getRecipes } from '../actions/getRecipes.js';
import Recipe from './Recipe.js'

class RecipeList extends Component {



render() {
   
   return (
    
  
    <div>
     {this.props.recipes.map(recipe => { return <Recipe recipe={recipe} key={recipe.id} />})}
    </div>
   )
    
  }
}

export default RecipeList;