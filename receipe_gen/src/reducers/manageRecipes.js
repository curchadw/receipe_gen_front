// import cuid from 'cuid';
// export const cuidFn = cuid
//import { ADD_RECIPE } from '../actions/types';

export default function manageRecipes(state={
    loading: false,
    recipes:[],
    category_id:[],
    error: false
}, action){


    switch(action.type){
        case 'START_ADDING_RECIPE':
            return{
                ...state,
                loading:true
            }

        case 'ADD_RECIPE':
            const recipe = {
                name: action.payload.name,
                ingredients: action.payload.ingredients,
                chef_name: action.payload.chef_name,
                origin: action.payload.origin,
                instructions: action.payload.instructions,
                category_id: action.payload.category_id
                
            }


           
           
            return{
                 ...state,
                 recipes: [...state.recipes, recipe],
                
                loading: false
            }


        case 'ADD_RECIPE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'DELETING_RECIPE_START': 
            return {
            
            recipe:[...state.recipes], 
            loading: true 
            }

        case 'DELETE_RECIPE_SUCCESS':
                
            const recipes = state.recipes.filter(recipe => recipe.id !== action.payload)
            console.log(state.recipes)
            return {
                    ...state, recipes,
                   loading: false
            }
            
            

        case 'START_FETCHING_RECIPES_REQUEST':
            return {
                ...state,
            recipes: [...state.recipes],
            loading: true
        }
        case 'GET_RECIPES':
            return {
                ...state, recipes: action.recipes,
                loading: false
            }
        
       
        case 'GET_CATEGORIES':
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