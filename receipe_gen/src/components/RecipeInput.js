import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { validEmailRegex, validateForm } from '../validations/formvalidation'
import '../index.css'



class RecipeInput extends Component{

   
    constructor(props){
        super(props)
        this.state = {
            category_id: [],
            name:'',
            ingredients:'',
            chef_name:'',
            origin:'',
            instructions:'',
            value:''
            
            
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



    

    

    

    handleName = (event) =>{
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

    handleSelect = (event) =>{
        
        this.setState({category_id:event.id})
    }

    componentDidMount(){
        this.getOptions()
    }


    handleReset = () =>{
        this.setState({ name:'', ingredients: '', chef_name: '', origin: '',instructions: '',category_id:''})
    }

   

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.postRecipes(this.state)
        this.handleReset()
              
    }

    

    render(){
       let dropdown = 'form-select form-select-sm'
        return(
            <div>
                
                <form onSubmit={(event)=>this.handleSubmit(event)} noValidate>
                    <Select ref={ref => {
            this.selectRef = ref}} options={this.state.category_id ? this.state.category_id : ''} onChange={(event)=>this.handleSelect(event)} className={dropdown}/>
                    <div className='name'>
                    <label htmlFor='name'>Recipe Name:</label>
                    <input formName='name' className ="form-control" type='text' value={this.state.name} onChange={(event)=>this.handleName(event)} />
                    </div>
                    <div>
                    <label htmlFor='origin'>Country Origin:</label>
                    <input className ="form-control" type='text' value={this.state.origin} onChange={(event)=>this.handleOriginChange(event)} />
                    </div>
                    <div>
                    <label htmlFor='chef_name'>Chef Name:</label>
                    <input className ="form-control" type='text' value={this.state.chef_name} onChange={(event)=>this.handleChefChange(event)} />
                    </div>
                    <div>
                    <label htmlFor='ingredients'>Ingredients:</label>
                    <textarea className ="form-control" cols="30" rows="5" type='text' value={this.state.ingredients} onChange={(event)=>this.handleIngChange(event)} />
                    <label htmlFor='instructions'>Instructions:</label>
                    <textarea className ="form-control" cols="30" rows="5" type='text' value={this.state.instructions} onChange={(event)=>this.handleInsChange(event)} />
                    </div>
                    <input value='submit' type='submit' />
                </form>
                
            </div>
        )
    }


 


}

export default RecipeInput