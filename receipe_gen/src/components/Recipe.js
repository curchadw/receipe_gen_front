import React, {Component} from 'react'


class Recipe extends Component {
   
    render(){
        
        return(
            <div>
            <h3>Name: {this.props.recipe.name}</h3>
            <p>Category:{this.props.recipe.category_id}</p>
            <p>Chef Name: {this.props.recipe.chef_name}</p>
            <p>Origin: {this.props.recipe.origin}</p>
            <p>Ingredients: {this.props.recipe.ingredients}</p>
            </div>
             
        )
    }

}

export default Recipe