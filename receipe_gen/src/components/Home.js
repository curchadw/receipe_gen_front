import React, { Component } from 'react'
import '../index.css'
import foodimage from './foodimage.jpg'




class Home extends Component{

render(){
  let home = 'home'
  let food = 'food'
    return(
    
      <div className={home}>
          <h1>Welcome To The Recipe App</h1>
          <h3>Click links above to get started!</h3>
          <img src={foodimage} alt='food' width="700" height="700" className={food}></img>
      </div>
            
    )
}
}

export default Home;