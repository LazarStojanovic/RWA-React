import { combineReducers } from 'redux';
import cityreducer from './cityreducer';
import cityComponentReducer from './cityComponentReducer';
import { City } from '../models/City';

export interface AppState {
    cities?: City[];
    city: City;
}


export const rootReducer = combineReducers({
    cities: cityreducer,
    city: cityComponentReducer
});