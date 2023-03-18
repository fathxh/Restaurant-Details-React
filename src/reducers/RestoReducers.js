import { RESTAURANT_LIST_FAIL,RESTAURANT_LIST_SUCCESS } from "../constants/Constants";

export const restaurantListReducer=(state={rest:[]},action)=>{
    switch(action.type){
        case RESTAURANT_LIST_SUCCESS:
            return {restaurants:action.payload}
        case RESTAURANT_LIST_FAIL:
            return {error:action.payload}

        default:
            return state
        
    }

}

