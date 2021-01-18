import React, {Component} from 'react';
// import { getRecipes } from '../actions/getRecipes.js';
import Recipe from './Recipe.js'

class RecipeList extends Component {

// componentDidMount(){
//    this.props.getRecipes()
// }

render() {
   const { recipes } = this.props
   console.log(recipes)
   return (
    
      
    <div>
      
     {recipes.map(recipe =>  <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
   )
    
  }
}

export default RecipeList;