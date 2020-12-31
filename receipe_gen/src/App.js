import './App.css';
import React, { Component } from 'react'
import RecipesContainer from './containers/RecipesContainer.js'

class App extends Component{
  render(){
    return(
      <div>
        <RecipesContainer />
      </div>
    )
  }
}

export default App;
