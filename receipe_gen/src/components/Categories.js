import React, { Component } from 'react'

class Categories extends Component{
    

    handleCatChange = (event) => {
        this.setState({category: event.target.value})
    }

    render(){
       
        let categories = this.props.category
        let onChange = this.props.onChange;
        let optionItems = categories.map((cat,index) => {
          return  <option key={index} value={cat.category}>{cat.category}</option>
        })

        


        return (
            <div>
                <select onChange={(e) => onChange(e.target.value)}>
                    {this.props.category ? optionItems : <p>Loading....</p>}
                </select>
            </div>
        )
    }
}

export default Categories