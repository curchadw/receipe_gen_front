export const getCategories = () => {
  
    const BASE_URL = `http://localhost:3001`
    const CATEGORIES_URL =`${BASE_URL}/categories`

    return (dispatch) => {
      dispatch({ type: 'START_FETCHING_CATEGORIES_REQUEST' });
      fetch(CATEGORIES_URL)
        .then(response =>{ return response.json()})
        .then(category_id => { return console.log(category_id), dispatch({ type: 'Get_Categories', category_id })});
       
        
    };

    
    
  }