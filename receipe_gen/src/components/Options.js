import axios from 'axios'
export const getOptions = () =>{
    const BASE_URL = `http://localhost:3002`
    const CATEGORIES_URL =`${BASE_URL}/categories`

    return axios.get(CATEGORIES_URL).then(function(response){
        return response.data
    })

}
