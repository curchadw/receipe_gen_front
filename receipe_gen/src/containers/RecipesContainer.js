import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'
import { postRecipes } from '../actions/fetchRecipes.js'

class RecipeContainer extends Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.postRecipes()
    }

    render(){
        return (
            <div>
               <RecipeInput addRecipe={this.props.addRecipe}/> 
               <RecipeList recipes={this.props.recipes} deleteRecipe={this.props.deleteRecipe}/>
            </div>
        )
    }

}


//const mapStateToProps=({ recipes }) => ({ recipes })
const mapStateToProps = state =>{
    return{
        recipes: state.recipes,
    }
}


const mapDispatchToProps= dispatch =>{
    return{
    addRecipe: () => dispatch(postRecipes()),
    deleteRecipe: id => dispatch({type: 'Delete_Recipe', id})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RecipeContainer)