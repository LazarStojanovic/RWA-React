import { Action } from 'redux';
import {City} from '../models/City';
import {
	ADD_CITY,
	AddCity,
	ADD_CITIES,
	AddCities
} from './actions';

const initialState: City[] =  [
    {
        name: 'Beograd',
        image: '/Beograd.JPG'
    }
]
    



export function cityreducer(
    state: City[] = initialState,
    action: Action
){
    
    
    switch (action.type){
        case ADD_CITY:
            const { city } = action as AddCity;
            return [...state, city];
        case ADD_CITIES:
            const { cities } = action as AddCities;
            return [...state,...cities];
         default:
                return state;
    }
    
}

export default cityreducer;