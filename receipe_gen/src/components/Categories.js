import React, { Component } from 'react'

class Categories extends Component{
    

    render(){
        let categories = this.props.categories
        let optionItems = categories.map((category,index) =>
            <option key={index}>{category.name}</option>
        )


        return (
            <div>
                <select>
                    {optionItems}
                </select>
            </div>
        )
    }
}

export default Categories