
export const deleteRecipe = (recipeId) =>{
    const BASE_URL = `http://localhost:3002`
    const RECIPES_URL =`${BASE_URL}/recipes`

    
   
    return (dispatch) => {
        fetch(`${RECIPES_URL}/${recipeId}`, { method: 'DELETE' })
            // first then is not needed, the controller method does not return json
            .then(() => {
                return dispatch({ type: 'DELETE_RECIPE_SUCCESS', payload: recipeId })
            });
    };

}




