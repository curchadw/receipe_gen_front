import React, { Component } from 'react'

class Categories extends Component{
    

    handleCatChange = (event) => {
        this.setState({category: event.target.value})
    }

    render(){
       
        let categories = this.props.category
        let value = this.props.value
        let optionItems = categories.map((cat,index) => {
          return  <option key={index} value={value}>{cat.category}</option>
        })

        


        return (
            <div>
                <select onchange={this.handleCatChange} value={this.props.category}>
                    {this.props.category ? optionItems : <p>Loading....</p>}
                </select>
            </div>
        )
    }
}

export default Categories