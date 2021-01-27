import React, {Component} from 'react';
import Recipe from './Recipe.js'
import '../index.css'

class RecipeList extends Component {



render() {
  
   const { recipes } = this.props
   let flex ='flexitems'
   return (
    
      
    <div>
      <container className={flex}>
          {recipes.map(recipe => <Recipe recipe={recipe} deleteRecipe={this.props.deleteRecipe} key={recipe.id} /> )}
      </container>
    </div>
   )
    
  }
}

export default RecipeList;