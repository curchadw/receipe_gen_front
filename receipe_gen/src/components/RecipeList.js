import React, {Component} from 'react';
import Recipe from './Recipe.js'

class RecipeList extends Component {



render() {
   const { recipes } = this.props
   return (
    
      
    <div>
      
      {recipes.map((recipe,index) =>  {return <Recipe recipe={recipe} key={index} />})}
    </div>
   )
    
  }
}

export default RecipeList;