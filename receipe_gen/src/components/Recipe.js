import React, {Component} from 'react'



class Recipe extends Component {
   
    handleOnClick(){
        this.props.deleteRecipe(this.props.recipe.id);
      }

    render(){
        let recipeItem = 'recipe_item'
        return(
            <div className ={recipeItem}>
            <h4>Name: {this.props.recipe.name}</h4>
            <p>Category:{this.props.recipe.category_id}</p>
            <p>Chef Name: {this.props.recipe.chef_name}</p>
            <p>Origin: {this.props.recipe.origin}</p>
            <p>Ingredients: {this.props.recipe.ingredients}</p>
            <button onClick={()=>this.handleOnClick()}>Delete</button>
            </div>
             
        )
    }

}

export default Recipe