import React, { Component } from 'react'

class Categories extends Component{
    

    render(){
        let category = this.props.category
        let optionItems = category.map((category,index) =>
            <option key={index}>{category.category}</option>
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