import React, { Component } from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns'

class RecipeInput extends Component{
    constructor(props){
        super(props)

        this.state = {
            catagories: [],
            name:'',
            ingredients: '',
            chef_name: '',
            origin: '',
        }

        this.handleNameChange = this.handleNameChange.bind(this,'name');
        this.handleIngChange = this.handleIngChange.bind(this,'ingredients');
        this.handleChefChange = this.handleChefChange.bind(this,'chef_name');
        this.handleOriginChange = this.handleOriginChange.bind(this,'origin');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(keyName, event){
        this.setState({ [keyName]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addRecipe(this.state)
        this.setState({
        catagoryId: this.props.catagoryId,
        name:'',
        ingredients: '',
        chef_name: '',
        origin: ''
     })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <DropDownList data={this.catagories}/>
                    <label for='name'>Recipe Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                    <label for='name'>Country Origin:</label>
                    <input type='text' value={this.state.origin} onChange={this.handleOriginChange} />
                    <label for='name'>Chef Name:</label>
                    <input type='text' value={this.state.chef_name} onChange={this.handleChefChange} />
                    <label for='name'>Ingredients:</label>
                    <input type='textarea' value={this.state.ingredients} onChange={this.handleIngChange} />
                    <input value='submit' type='submit'/>
                </form>
            </div>
        )
    }


 


}

export default RecipeInput