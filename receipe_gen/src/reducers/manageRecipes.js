// import cuid from 'cuid';
// export const cuidFn = cuid

export default function manageRecipes(state={
    recipes:[],
    category_id:[],
}, action){


    switch(action.type){
        case 'Add_Recipe':
            const recipe = {
                id: action.id,
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

        case 'START_FETCHING_RECIPES_REQUEST':
            return {
                ...state,
            recipes: [...state.recipes],
            requesting: true
        }
        case 'Get_Recipes':
            return {
                ...state, recipes: action.recipes,
                requesting: false
            }
        
       
        case 'Get_Categories':
            // const category = {
            //     category_id: action.category_id
            // }    
            return{
                ...state, category_id: action.category_id,
                requesting: false
            }
            case 'START_FETCHING_CATEGORIES_REQUEST':
                return {
                    ...state,
                catergory_id: [...state.category_id],
                requesting: true
            }
        default:
            return state
        
    }
}