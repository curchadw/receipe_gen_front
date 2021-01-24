
export const deleteRecipe = (recipeId) =>{
    const BASE_URL = `http://localhost:3001`
    const RECIPES_URL =`${BASE_URL}/recipes`

    
   
    return (dispatch) => {
        
        dispatch({ type: "DELETING_RECIPE_START" })
        fetch(`${RECIPES_URL}/${recipeId}`,{method: 'DELETE'})
        //   .then(response =>{ return response.json() })
          .then(() =>{ return dispatch({ type: 'DELETE_RECIPE_SUCCESS', payload: recipeId  })})
          .catch((error) => {throw(error)})
    };

}




