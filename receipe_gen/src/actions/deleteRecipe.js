export const deleteRecipe = (recipeId) =>{
    const BASE_URL = `http://localhost:10524`
    const RECIPES_URL =`${BASE_URL}/recipes`
    const RECIPES_URL_SHOW = `${RECIPES_URL}/${recipeId}`

    
    return (dispatch) => {
        dispatch({ type: "DELETING_RECIPE_START" })
        fetch(RECIPES_URL_SHOW,{method: 'DELETE'})
          .then(response => response.json())
          .then(recipeId =>  dispatch({ type: 'Delete_Recipe', payload: recipeId }));
         
          
      };
       
  }

