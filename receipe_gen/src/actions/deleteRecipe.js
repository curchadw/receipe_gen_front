
export const deleteRecipe = (recipeId) =>{
    const BASE_URL = `http://localhost:3001`
    const RECIPES_URL =`${BASE_URL}/recipes`

    return (dispatch) => {
        
        dispatch({ type: "DELETING_RECIPE_START" })
        fetch(`${RECIPES_URL}/${recipeId}`,{method: 'DELETE'})
          .then(response =>{return response.json()})
          .then(recipeId =>  dispatch({ type: 'DELETE_RECIPE_SUCCESS', payload: recipeId }));
    };

}




