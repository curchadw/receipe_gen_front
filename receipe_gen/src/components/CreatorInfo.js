import React, { Component } from 'react'
import Home from './Home'
import RecipesContainer from '../containers/RecipesContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class CreatorInfo extends Component{
render(){
    return(
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
            
    
            <h2>About this application</h2>
            <p>The purpose of this application was for a way for somebody to manage their cooking recipes. Over time this application will grow with a lot of recipes
            </p>
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

export default CreatorInfo