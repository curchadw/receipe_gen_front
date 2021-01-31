export const postRecipes = (recipe) => {
  
  const BASE_URL = `http://localhost:3001`
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
    
    fetch(RECIPES_URL,config)
      .then(response =>{ response.json()})
      .then(recipe => { dispatch({ type: 'ADD_RECIPE', payload: recipe })})
    //   .then(recipe => { recipe.setState({
    //         name:'',
    //         ingredients: '',
    //         chef_name: '',
    //         origin: '',
    //         instructions: ''
    //   })
    // })
      .catch((error) => console.log.error(error))
     
      
  };

  
  
}