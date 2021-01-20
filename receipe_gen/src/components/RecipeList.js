import React, {Component} from 'react';
import Recipe from './Recipe.js'

class RecipeList extends Component {



render() {
   const { recipes } = this.props
   return (
    
      
    <div>
      
      {recipes.map(recipe =>  {return <Recipe recipe={recipe} {...recipe} deleteRecipe={this.props.deleteRecipe} key={recipe.id} />})}
    </div>
   )
    
  }
}

export default RecipeList;