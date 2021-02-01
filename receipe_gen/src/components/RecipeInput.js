import React, { Component } from 'react'
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
            origin: '',
            instructions:''
            
        }
        

        
    }


      

    
    async getOptions(){
        const BASE_URL = `http://localhost:3002`
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

    handleInsChange = (event) =>{
        this.setState({instructions:event.target.value})
    }

    handleIngChange = (event) =>{
        this.setState({ingredients:event.target.value})
    }

    handleChefChange = (event) =>{
        this.setState({chef_name:event.target.value})
    }

    handleOriginChange = (event) =>{
        this.setState({origin:event.target.value})
    }

    handleChange = (event) =>{
        
        this.setState({category_id:event.id})
    }

    componentDidMount(){
        this.getOptions()
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        // debugger
        this.props.postRecipes(this.state)
        this.handleReset()
              
    }

    handleReset = () =>{
        this.setState({ name:'', ingredients: '', chef_name: '', origin: '',instructions: '',category_id:''})
    }

    

    
    
        

    render(){
       let dropdown = 'form-select form-select-sm'
  
        return(
            <div>
                
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <Select options={this.state.category_id} onChange={(event)=>this.handleChange(event)} className={dropdown}/>
                    <div>
                    <label htmlFor='name'>Recipe Name:</label>
                    <input  className ="form-control" type='text' value={this.state.name} onChange={(event)=>this.handleNameChange(event)} />
                    </div>
                    <div>
                    <label htmlFor='name'>Country Origin:</label>
                    <input className ="form-control" type='text' value={this.state.origin} onChange={(event)=>this.handleOriginChange(event)} />
                    </div>
                    <div>
                    <label htmlFor='name'>Chef Name:</label>
                    <input className ="form-control" type='text' value={this.state.chef_name} onChange={(event)=>this.handleChefChange(event)} />
                    </div>
                    <div>
                    <label htmlFor='name'>Ingredients:</label>
                    <textarea className ="form-control" cols="30" rows="5" type='text' value={this.state.ingredients} onChange={(event)=>this.handleIngChange(event)} />
                    <label htmlFor='name'>Instructions:</label>
                    <textarea className ="form-control" cols="30" rows="5" type='text' value={this.state.instructions} onChange={(event)=>this.handleInsChange(event)} />
                    </div>
                    <input value='submit' type='submit'/>
                </form>
                
            </div>
        )
    }


 


}

export default RecipeInput