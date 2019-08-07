import { Action } from 'redux';
import {Review} from '../../models/Review';
import {
	ADD_REVIEWS,
	AddReviews
} from '../actions/reviewsActions';
const initialState: Review[] =  [
    {
        id: 0,
        name: '',
        text: " ",
        restaurantId: 0,
        cinemaId:0
    }
]
    



export function reviewsReducer(
    state: Review[] = initialState,
    action: Action
){
    switch (action.type){
        case ADD_REVIEWS:
            const { reviews } = action as AddReviews;
            return [...state,...reviews];
            
         default:
                return state;
    }
    
}

export default reviewsReducer;