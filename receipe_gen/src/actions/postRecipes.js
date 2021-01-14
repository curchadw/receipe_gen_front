// import Recipe from '../component/Recipe.js'

export const postRecipes = (recipe)=>{
    const BASE_URL = `http://localhost:10524`
    const RECIPES_URL =`${BASE_URL}/recipes`

    
    const config = {
        method: "POST",
        body:JSON.stringify(recipe),
        headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
     }
    }
    //category field
    return(dispatch)=>{
    fetch(RECIPES_URL,config)
    .then(response => 
    response.json())
    .then(resp => {
        dispatch({
            type: 'Add_Recipe',
            payload:{
                recipe:resp[{
                category:resp.category,
                name: resp.name,
                ingredients: resp.ingredients,
                chef_name: resp.chef_name,
                origin: resp.origin,
                // categoryId: resp.categoryId 
                }]
            }
        })
    })
    //.then(response => <Recipe />)
      .catch((error) => console.log.error(error))

    }
    
    
}