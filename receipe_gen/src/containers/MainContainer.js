import React, { Component } from 'react'
import RecipesContainer from './RecipesContainer.js'
import CreatorInfo from '../components/CreatorInfo'
import Home from '../components/Home'
import '../index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class MainContainer extends Component{
    render(){
        return(
        <Router>   
        <div>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/recipes">Recipes</Link>
                </li>
                </ul>
                </nav>
                <hr/>
                <container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={CreatorInfo} />
                    <Route exact path="/recipes" component={RecipesContainer} />
                </Switch>
                </container>
            
          </div>
        </Router> 
        )
      }

}

export default MainContainer