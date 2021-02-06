import React, {Component} from 'react'




class Recipe extends Component {

   state={
        likes:0
   }
    handleOnClick(){
        this.props.deleteRecipe(this.props.recipe.id);
      }


    likesIncrease(){
        this.setState(state=>({
           likes: state.likes + 1 
        }))
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
            <p>Instructions: {this.props.recipe.instructions}</p>
            <button onClick={()=>this.handleOnClick()}>Delete</button>
            <button onClick={()=>this.likesIncrease()}>Likes:{this.state.likes}</button>
            </div>
             
        )
    }

}

export default Recipe