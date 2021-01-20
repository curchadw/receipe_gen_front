export const deleteRecipe = (recipeId) =>{
    const BASE_URL = `http://localhost:10524`
    const RECIPES_URL =`${BASE_URL}/recipes`

    return (dispatch) => {
        
        fetch(`${RECIPES_URL}/${recipeId}`)
          .then(response =>{ return response.json()})
          .then(id => { return dispatch({ type: 'Delete_Recipe', id })});
         
          
      };
       
  }