import { Action } from 'redux';
import {City} from '../models/City';
import { sendDataToCityComponent, SEND_DATA } from './actions';


const initialState: City[] =  [
    {
        name: 'Beograd',
        image: '/Beograd.JPG'
    }
]
    



export function cityComponentReducer(state: City[] = initialState, action: Action)
{   
    switch (action.type){
        case SEND_DATA:
            const{ city } = action as sendDataToCityComponent;
            return [...state, city]
         default:
                return state;
    }
    
}

export default cityComponentReducer;