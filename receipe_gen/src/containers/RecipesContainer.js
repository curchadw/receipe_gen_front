import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'
import { postRecipes } from '../actions/postRecipes.js'
//import { createRecipe } from '../actions/postRecipes.js'
import { getRecipes } from '../actions/getRecipes'
import { deleteRecipe } from '../actions/deleteRecipe'
import '../index.css'




class RecipesContainer extends Component{
    

    componentDidMount(){
        this.props.getRecipes()
      }


      handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return  <RecipeList recipes={this.props.recipes} deleteRecipe={this.props.deleteRecipe}/>
        }
      }
      
    

    render(){
      
        return (
        <div className='recipe_con'>
               <h2>Create a Recipe!</h2>
               <RecipeInput postRecipes={this.props.postRecipes} /> 
               {this.handleLoading()}
              
           
        </div>
        )
    }

    

}

const mapStateToProps = state =>{
    return{
        recipes: state.recipes,
        loading: state.loading

    }
}


const mapDispatchToProps = dispatch =>{
    return{
    postRecipes: recipe => dispatch(postRecipes(recipe)),
    // postRecipes: recipe => dispatch(createRecipe(recipe)),
    getRecipes: () => dispatch(getRecipes()),
    deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(RecipesContainer)