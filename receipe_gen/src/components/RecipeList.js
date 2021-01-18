import React, {Component} from 'react';
// import { getRecipes } from '../actions/getRecipes.js';
import Recipe from './Recipe.js'

class RecipeList extends Component {

// componentDidMount(){
//   getRecipes()
// }

render() {
   
   return (
  
    <div>
     {this.props.recipes.map(recipe => (<Recipe recipe={recipe} key={recipe.id} />))}
    </div>
   )
    
  }
}

export default RecipeList;