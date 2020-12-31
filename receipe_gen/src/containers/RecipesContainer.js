import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'

class RecipeContainer extends Component{
    constructor(props){
        super(props)
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


// const mapStateToProps=({ recipes }) => ({ recipes })
const mapDispatchToProps= dispatch =>({
    addRecipe: recipe => dispatch({type: 'Add_Recipe', recipe}),
    deleteRecipe: id => dispatch({type: 'Delete_Recipe', id})
})


export default connect(null,mapDispatchToProps)(RecipeContainer)