import React, {Component} from 'react'


class Recipe extends Component {
   
    handleOnClick(){
        this.props.deleteRecipe(this.props.recipe.id);
      }

    render(){
        
        return(
            <div>
            <h3>Name: {this.props.recipe.name}</h3>
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