import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'
import { postRecipes } from '../actions/postRecipes.js'
import { getRecipes } from '../actions/getRecipes'


class RecipeContainer extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        getRecipes()
      }
    

    render(){
        return (
            <div>
               <RecipeInput postRecipes={this.props.postRecipes} /> 
               <RecipeList getRecipes={this.props.getRecipes} deleteRecipe={this.props.deleteRecipe} />
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
    postRecipes: () => dispatch(postRecipes()),
    getRecipes: () => dispatch(getRecipes())
    // deleteRecipe: id => dispatch({type: 'Delete_Recipe', id})
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(RecipeContainer)