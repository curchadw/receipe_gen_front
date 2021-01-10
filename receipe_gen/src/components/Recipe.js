import React, {Component} from 'react'


class Recipe extends Component {

    render(){
        return(
            <div>
            <h2>{this.props.name}</h2>
            <p>Chef Name: {this.props.chef_name}</p>
            <p>Origin: {this.props.origin}</p>
            <p>Ingredients: {this.props.ingredients}</p>
            </div>
        )
    }

}

export default Recipe