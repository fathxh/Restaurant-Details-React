import { RESTAURANT_LIST_FAIL,RESTAURANT_LIST_SUCCESS } from "../constants/Constants";
import axios from 'axios'


export const listRestaurants=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get('/restaurants.json')   //responce.data
        dispatch({
            type:RESTAURANT_LIST_SUCCESS,payload:data.restaurants
        })

    }
    catch(error){
        dispatch({
            type:RESTAURANT_LIST_FAIL,payload:error
        })

    }

}