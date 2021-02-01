export const getCategories = () => {
  
    const BASE_URL = `http://localhost:3002`
    const CATEGORIES_URL =`${BASE_URL}/categories`

    return (dispatch) => {
      dispatch({ type: 'START_FETCHING_CATEGORIES_REQUEST' });
      fetch(CATEGORIES_URL)
        .then(response =>{ response.json()})
        .then(category_id => { dispatch({ type: 'GET_CATEGORIES', category_id })});
       
        
    };

    
    
  }