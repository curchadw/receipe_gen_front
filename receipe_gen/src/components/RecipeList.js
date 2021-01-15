import React, {Component} from 'react';
import { getRecipes } from '../actions/getRecipes'



class RecipeList extends Component {
  
  
render() {
    
   return (
    <div>
     {getRecipes}
    </div>
   )
    
  }




 }

export default RecipeList;