import React, { Component } from 'react'
import  Categories  from './Categories.js'



class RecipeInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            category: [],
            name:'',
            ingredients: '',
            chef_name: '',
            origin: '',
            selectedValue:{}
            
        }
        

        
    }

    

    componentDidMount(){
        let initialCats = [];
        const BASE_URL = `http://localhost:10524`
        const CATEGORIES_URL =`${BASE_URL}/categories`
        fetch(CATEGORIES_URL)
        .then(resp => resp.json())
        .then(data => {
            
            initialCats = data.map((category) => {
                return category
            })
                this.setState({
                
                    
                    category: initialCats
                
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

    handleSubmit = (id) =>{
        // event.preventDefault();
        this.props.postRecipes(this.state)
        this.setState({
        // name:'',
        // ingredients: '',
        // chef_name: '',
        // origin: ''
        selectedValue: this.state.category[id]
        
     })
    }

    

    
    
        

    render(){
        const onChange = (value) => {
            console.log(value)
        }
        
  
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Categories category={this.state.category} onChange={onChange}/>
                    <div>
                    <label for='name'>Recipe Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                    <label for='name'>Country Origin:</label>
                    <input type='text' value={this.state.origin} onChange={this.handleOriginChange} />
                    </div>
                    <div>
                    <label for='name'>Chef Name:</label>
                    <input type='text' value={this.state.chef_name} onChange={this.handleChefChange} />
                    </div>
                    <div>
                    <label for='name'>Ingredients:</label>
                    <textarea value={this.state.ingredients} onChange={this.handleIngChange} />
                    </div>
                    <input value='submit' type='submit'/>
                </form>
            </div>
        )
    }


 


}

export default RecipeInput