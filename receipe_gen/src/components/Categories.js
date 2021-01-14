import React, { Component } from 'react'

class Categories extends Component{
    

    render(){
       
        let categories = this.props.category
        debugger
        let optionItems = categories.map((cat,index) =>
            <option key={index}>{cat.category}</option>
        )


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