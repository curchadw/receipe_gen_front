import React, { Component } from 'react'

class Catagories extends Component{
    constructor(){
        super()
    }

    render(){
        let catagories = this.props.catagories
        let optionItems = catagories.map((catagory,index) =>
            <option key={index}>{catagory.name}</option>
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

export default Catagories