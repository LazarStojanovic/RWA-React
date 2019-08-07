import { Action } from 'redux';
import { selectedRestaurantItem, SEND_RESTAURANT_DATA } from '../actions/restaurantsActions';
import { Restaurant } from '../../models/Restaurant';


const initialState: Restaurant =  
    {
        id: 1,
        name: 'Neki Bg Restoran',
        adress: "Neka Adresa",
        cityId: 1
    }


    



export function selectedRestaurantReducer(state: Restaurant = initialState, action: Action)
{   
    switch (action.type){
        case SEND_RESTAURANT_DATA:
            const{ restaurant } = action as selectedRestaurantItem;
            let restoran: Restaurant ={ id: restaurant.id, name: restaurant.name, adress: restaurant.adress ,cityId: restaurant.cityId}
            return restoran;  
         default:
                return state;
    }
    
}

export default selectedRestaurantReducer;