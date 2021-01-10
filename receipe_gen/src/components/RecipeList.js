import React, {Component} from 'react';

import { getRecipes } from '../actions/getRecipes.js'


class RecipeList extends Component {
  
  componentDidMount(){
    getRecipes()
  }

render() {
    
   return (
    <div>
     {getRecipes}
    </div>
   )
    
  }




 }

export default RecipeList;