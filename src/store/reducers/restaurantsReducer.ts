import { Action } from 'redux';
import {Restaurant} from '../../models/Restaurant';
import {
	ADD_RESTAURANTS,
	AddRestaurants
} from '../actions/restaurantsActions';
const initialState: Restaurant[] =  [
    {
        id: 0,
        name: 'Neki Bg Restoran',
        adress: "Neka Adresa",
        cityId: 1
    }
]
    



export function restaurantsReducer(
    state: Restaurant[] = initialState,
    action: Action
){
    switch (action.type){
        case ADD_RESTAURANTS:
            const { restaurants } = action as AddRestaurants;
            return [...state,...restaurants];
            
         default:
                return state;
    }
    
}

export default restaurantsReducer;