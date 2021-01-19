import React, {Component} from 'react';
// import { getRecipes } from '../actions/getRecipes.js';
import Recipe from './Recipe.js'

class RecipeList extends Component {

// componentDidMount(){
//    this.props.getRecipes()
// }

render() {
   const { recipes } = this.props
   return (
    
      
    <div>
      
     {recipes.map((recipe,index) =>  <Recipe recipe={recipe} key={index} />)}
    </div>
   )
    
  }
}

export default RecipeList;