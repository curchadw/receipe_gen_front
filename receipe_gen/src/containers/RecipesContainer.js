import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import RecipeInput from '../components/RecipeInput'
import { connect } from 'react-redux'
import { postRecipes } from '../actions/postRecipes.js'
import { getRecipes } from '../actions/getRecipes'
import { deleteRecipe } from '../actions/deleteRecipe'
import Home from '../components/Home'
import CreatorInfo from '../components/CreatorInfo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class RecipesContainer extends Component{
    constructor(props){
        super(props)
    }

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
          <Router>
            <div>
              <nav>
                   <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
              </nav>
              <hr />
               <RecipeInput postRecipes={this.props.postRecipes} /> 
               {this.handleLoading()}
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <CreatorInfo />
                </Route>
                <Route path="/recipes">
                  <RecipesContainer />
                </Route>
            </Switch>  
            </div>
          </Router>
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
    postRecipes: (recipe) => dispatch(postRecipes(recipe)),
    getRecipes: () => dispatch(getRecipes()),
    deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(RecipesContainer)