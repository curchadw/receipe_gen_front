export const getRecipes = () => {
  
    const BASE_URL = `http://localhost:3001`
    const RECIPES_URL =`${BASE_URL}/recipes`
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
    return (dispatch) => {
      dispatch({ type: 'START_FETCHING_RECIPES_REQUEST' });
      fetch(RECIPES_URL)
        .then(response =>{ return response.json()})
        .then(recipes => { dispatch({ type: 'GET_RECIPES', recipes })});
    };

    
    
  }
