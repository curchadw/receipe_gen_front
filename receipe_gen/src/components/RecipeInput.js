import React, { Component } from 'react'
import  Categories  from './Categories.js'

class RecipeInput extends Component{
    constructor(props){
        super(props)

        this.state = {
            categories: [],
            categoryId: '',
            name:'',
            ingredients: '',
            chef_name: '',
            origin: '',
        }

        
    }

    

    componentDidMount(){
        let initialCats = [];
        const BASE_URL = `http://localhost:10524`
        const CATEGOREIS_URL =`${BASE_URL}/categories`
        fetch(CATEGOREIS_URL)
        .then(resp => resp.json())
        .then(data => {
            
            initialCats = data.map((category) => {
                return category
            })
            console.log(initialCats)
                this.setState({
                    categories: initialCats,
                })   
            });
    }

    handleNameChange = (event) =>{
        this.setState({name:event.target.value})
    }

    handleIngChange = (event) => {
        this.setState({ingredients:event.target.value})
    }

    handleChefChange = (event) =>{
        this.setState({chef_name:event.target.value})
    }

    handleOriginChange = (event) => {
        this.setState({origin:event.target.value})
    }


    handleChange = (keyName, event) =>{
        this.setState({ [keyName]: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.postRecipes(this.state)
        this.setState({
        categoryId:'',    
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
                    <Categories categories={this.state.categories}/>
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