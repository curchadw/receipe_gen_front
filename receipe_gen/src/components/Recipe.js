import React, {Component} from 'react'


class Recipe extends Component {

    render(){
        return(
            <div>
            <h2>{this.props.recipe.name}</h2>
            <p>Chef Name: {this.props.recipe.chef_name}</p>
            <p>Origin: {this.props.recipe.origin}</p>
            <p>Ingredients: {this.props.recipe.ingredients}</p>
            </div>
        )
    }

}

export default Recipe