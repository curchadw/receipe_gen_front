import React, { Component } from 'react'
// import  Categories  from './Categories.js'
import Select from 'react-select'
import axios from 'axios'
import '../index.css'



class RecipeInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            category_id: [],
            name:'',
            ingredients: '',
            chef_name: '',
            origin: ''
            
        }
        

        
    }

    
    async getOptions(){
        const BASE_URL = `http://localhost:3001`
        const CATEGORIES_URL =`${BASE_URL}/categories`
        const res = await axios.get(CATEGORIES_URL)
        const data = res.data

        const options = data.map(d => ({
           
            
           
            'label' : d.category,
            'id' : d.id

            
        }))

        this.setState({category_id: options})
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

    handleChange = (e) =>{
        this.setState({category_id:e.id})
    }

    componentDidMount(){
        this.getOptions()
    }


    handleSubmit = (e) =>{
        // e.preventDefault();
        this.props.postRecipes(this.state)
        this.setState({
        name:'',
        ingredients: '',
        chef_name: '',
        origin: ''
     })
     
    }

    

    
    
        

    render(){
       let dropdown = 'form-select form-select-sm'
  
        return(
            <div>
                <container>
                <form onSubmit={this.handleSubmit}>
                    <Select options={this.state.category_id} onChange={this.handleChange} className={dropdown}/>
                    <div>
                    <label for='name'>Recipe Name:</label>
                    <input  className ="form-control" type='text' value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                    <label for='name'>Country Origin:</label>
                    <input className ="form-control" type='text' value={this.state.origin} onChange={this.handleOriginChange} />
                    </div>
                    <div>
                    <label for='name'>Chef Name:</label>
                    
                    <input className ="form-control" type='text' value={this.state.chef_name} onChange={this.handleChefChange} />
                    </div>
                    <div>
                    <label for='name'>Ingredients:</label>
                    <textarea className ="form-control" type='text' value={this.state.ingredients} onChange={this.handleIngChange} />
                    </div>
                    <input value='submit' type='submit'/>
                </form>
                </container>
            </div>
        )
    }


 


}

export default RecipeInput