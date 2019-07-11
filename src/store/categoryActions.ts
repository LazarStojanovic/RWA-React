import { Action } from 'redux';
import { Category } from '../models/Category';

export const FETCH_CATEGORIES = 'FETCH CATEGORIES';
export const ADD_CATEGORIES = 'ADD CATEGORIES';

export interface FetchCategories extends Action {}
export interface AddCategories extends Action {
	categories: Category[];
}

export function fetchCategories(): FetchCategories {
	return {
		type: FETCH_CATEGORIES
	};
}

export function addCategories(categories: Category[]): AddCategories {
	return {
		type: ADD_CATEGORIES,
		categories: categories
	};
}
