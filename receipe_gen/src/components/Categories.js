import React, { Component } from 'react'

class Categories extends Component{
    

    render(){
       
        let categories = this.props.recipe.category
        let optionItems = categories.map((cat,index) => {
          return  <option key={index}>{cat.category}</option>
        })


        return (
            <div>
                <select>
                    {this.props.catrgoty.length ? optionItems : <p>Loading....</p>}
                </select>
            </div>
        )
    }
}

export default Categories