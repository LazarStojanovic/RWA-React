import { Action } from 'redux';
import {Category} from '../models/Category';
import {
	ADD_CATEGORIES,
	AddCategories
} from './categoryActions';
const initialState: Category[] =  [
    {
        id: 0,
        name: '',
        image: ''
    }
]
    



export function categoryReducer(
    state: Category[] = initialState,
    action: Action
){
    switch (action.type){
        case ADD_CATEGORIES:
            const { categories } = action as AddCategories;
            return [...state,...categories ];
            
         default:
                return state;
    }
    
}

export default categoryReducer;