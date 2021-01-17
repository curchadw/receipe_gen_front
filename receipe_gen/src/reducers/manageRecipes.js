// import cuid from 'cuid';
// export const cuidFn = cuid

export default function manageRecipes(state={
    recipes:[],
    category_id:[],
}, action){


    switch(action.type){
        case 'Add_Recipe':
            const recipe = {
                
                name: action.name,
                ingredients: action.ingredients,
                chef_name: action.chef_name,
                origin: action.origin,
                category: action.category
                
            }

            return{
                ...state,
                recipes: [...state.recipes, recipe],
            }
        case 'Delete_Recipe':
            const recipes = state.recipes.filter(recipe => recipe.id !== action.id)
            return {...state, recipes}
        
        case 'Add_Catagory':
            const category = {
                name: action.name
            }    
            return{
                ...state,
                category_id: [...state.category_id, category],
            }
        default:
            return state
        
    }
}