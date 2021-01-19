import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'
import { postRecipes } from '../actions/postRecipes.js'
import { getRecipes } from '../actions/getRecipes'


class RecipesContainer extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getRecipes()
      }
    

    render(){
        return (
            <div>
               <RecipeInput postRecipes={this.props.postRecipes} /> 
               <RecipeList recipes={this.props.recipes} />
            </div>
        )
    }

    

}

const mapStateToProps = state =>{
    return{
        recipes: state.recipes
    }
}


const mapDispatchToProps = dispatch =>{
    return{
    postRecipes: (recipe) => dispatch(postRecipes(recipe)),
    getRecipes: () => dispatch(getRecipes())
    // deleteRecipe: id => dispatch({type: 'Delete_Recipe', id})
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(RecipesContainer)