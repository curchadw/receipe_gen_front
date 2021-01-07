import cuid from 'cuid';
export const cuidFn = cuid

export default function manageRecipes(state={
    recipes:[],
    catagories:[],
}, action){


    switch(action.type){
        case 'Add_Recipe':
            const recipe = {
                name: action.name,
                ingredients: action.ingredients,
                chef_name: action.chef_name,
                origin: action.origin,
                catagoryId: action.catagoryId,
                catagories: action.catagories,
                id: cuidFn()
            }

            return{
                ...state,
                recipes: [...state.recipes, recipe],
            }
        case 'Delete_Recipe':
            const recipes = state.recipes.filter(recipe => recipe.id !== action.id)
            return {...state, recipes}
        
        case 'Add_Catagory':
            const catagory = {
                name: action.name
            }    
            return{
                ...state,
                catagories: [...state.catagories, catagory],
            }
        default:
            return state
        
    }
}