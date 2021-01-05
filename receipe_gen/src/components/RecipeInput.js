import React, { Component } from 'react'
import  Catagories  from './Catagories.js'

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

        
    }

    

    componentDidMount(){
        let initialCats = [];
        const BASE_URL = `http://localhost:10524`
        const CATAGOREIS_URL =`${BASE_URL}/catagories`
        fetch(CATAGOREIS_URL)
        .then(resp => resp.json())
        .then(data => {
            initialCats = data.map((catagory) => {
                return catagory
            })
            console.log(initialCats)
                this.setState({
                    catagories: initialCats,
                })   
            });
    }

    handleNameChange(event){
        this.setState({name:event.target.value})
    }

    handleIngChange(event){
        this.setState({ingredients:event.target.value})
    }

    handleChefChange(event){
        this.setState({chef_name:event.target.value})
    }

    handleOriginChange(event){
        this.setState({origin:event.target.value})
    }


    handleChange(keyName, event){
        this.setState({ [keyName]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addRecipe(this.state)
        this.setState({
        catagoryId: this.props.catagoryId,
        catagories: this.state.catagories,
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
                    <Catagories catagories={this.state.catagories}/>
                    <div>
                    <label for='name'>Recipe Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                    </div>
                    <div>
                    <label for='name'>Country Origin:</label>
                    <input type='text' value={this.state.origin} onChange={this.handleOriginChange.bind(this)} />
                    </div>
                    <div>
                    <label for='name'>Chef Name:</label>
                    <input type='text' value={this.state.chef_name} onChange={this.handleChefChange.bind(this)} />
                    </div>
                    <div>
                    <label for='name'>Ingredients:</label>
                    <textarea value={this.state.ingredients} onChange={this.handleIngChange.bind(this)} />
                    </div>
                    <input value='submit' type='submit'/>
                </form>
            </div>
        )
    }


 


}

export default RecipeInput