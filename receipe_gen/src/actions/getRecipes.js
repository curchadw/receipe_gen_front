import Recipe from '../components/Recipe.js'

export const getRecipes = () => {
    const BASE_URL = `http://localhost:10524`
    const RECIPES_URL =`${BASE_URL}/recipes`


    return()=>{
        fetch(RECIPES_URL)
        .then(resp => resp.json())
        .then(recipes => recipes.map(recipe => {
          return <div><Recipe recipe={recipe} key={recipe.id}/></div>
        }));
    }
}
