import { combineReducers } from 'redux';
import citiesreducer from './citiesreducer';
import cityComponentReducer from './cityComponentReducer';
import { City } from '../models/City';

export interface AppState {
    cities?: City[];
    city: City;
}


export const rootReducer = combineReducers({
    cities: citiesreducer,
    city: cityComponentReducer
});