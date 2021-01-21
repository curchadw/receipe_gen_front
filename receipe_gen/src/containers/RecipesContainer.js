import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'
import { postRecipes } from '../actions/postRecipes.js'
import { getRecipes } from '../actions/getRecipes'
import { deleteRecipe } from '../actions/deleteRecipe'



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
               <RecipeList recipes={this.props.recipes} deleteRecipe={this.props.deleteRecipe}/>
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
    getRecipes: () => dispatch(getRecipes()),
    deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(RecipesContainer)