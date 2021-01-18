export const getRecipes = () => {
  
    const BASE_URL = `http://localhost:10524`
    const RECIPES_URL =`${BASE_URL}/recipes`

    return (dispatch) => {
      dispatch({ type: 'START_FETCHING_RECIPES_REQUEST' });
      fetch(RECIPES_URL)
        .then(response =>{ return response.json()})
        // .then(recipes => dispatch({ type: 'Get_Recipes', recipes }));
        .then(recipes => console.log(recipes))
        
    };

    
    
  }
