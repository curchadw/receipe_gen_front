import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import RecipesContainer from '../containers/RecipesContainer';
import CreatorInfo from './CreatorInfo';
  


class Home extends Component{

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

export default Home;