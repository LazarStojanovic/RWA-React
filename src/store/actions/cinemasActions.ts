import { Action } from 'redux';
import { Cinema} from '../../models/Cinema';

export const FETCH_CINEMAS = 'FETCH CINEMAS';
export const ADD_CINEMAS = 'ADD CINEMAS';
export const SEND_CINEMAS_DATA = 'SEND_CINEMAS_DATA';

export interface FetchCinemas extends Action {}
export interface AddCinemas extends Action {
	cinemas: Cinema[];
}
export interface selectedCinemaItem extends Action {
	cinema: Cinema;
}
export function fetchCinemas(): FetchCinemas {
	return {
		type: FETCH_CINEMAS
	};
}

export function addCinemas(cinemas: Cinema[]): AddCinemas {
	return {
		type: ADD_CINEMAS,
		cinemas: cinemas
	};
}

export function selectedCinemaItem(cinema: Cinema): selectedCinemaItem{
	return{
		type: SEND_CINEMAS_DATA,
		cinema: cinema
	};
}