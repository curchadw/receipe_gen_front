// import axios from 'axios'
// import {ADD_RECIPE} from './types'

export const postRecipes = (recipe) => {
  
  const BASE_URL = `http://localhost:3002`
 

  const RECIPES_URL =`${BASE_URL}/recipes`
  const config = {
      method: "POST",
      body:JSON.stringify(recipe),
      headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
   }
  }

  return (dispatch) => {
    dispatch({type:'START_ADDING_RECIPE'})
    fetch(RECIPES_URL,config)
      .then(response => response.json())
      .then(recipe => {
        if(recipe.error){
          throw(recipe.error)
          
        }
        else{
            console.log({recipe})
            return dispatch({type: 'ADD_RECIPE', payload: recipe})
        }
      })
      // .then(res => { dispatch({ type: 'ADD_RECIPE', recipe: res })})
      .catch((error) => dispatch({type: 'ADD_RECIPE_FAILURE', error}))
     
      
  };

  

  
  
}

// export const createRecipeSuccess = (data) =>{
//   return {
//     type: ADD_RECIPE,
//     payload :{
//       _id: data._id,
//       name: data.name,
//       origin: data.origin,
//       chef_name: data.chef_name,
//       ingredients: data.ingredients,
//       instructions: data.instructions,
//       category_id: data.category_id
//     }
//   }
//  }

// export const createRecipe = ({name,origin,chef_name,ingredients,instructions,category_id}) =>{
//   const BASE_URL = `http://localhost:3002`
//   const RECIPES_URL =`${BASE_URL}/recipes`
//   let recipe = {name,origin,chef_name,ingredients,instructions,category_id}
//   return(dispatch)=>{
//     dispatch({type:'START_ADDING_RECIPE'})
//     return axios.post(RECIPES_URL,recipe)
//       .then(response => {dispatch(createRecipeSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error)
//       })
//   }
// }

