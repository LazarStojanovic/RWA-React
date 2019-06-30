import { put,takeLatest } from 'redux-saga/effects';
import { FETCH_CITIES, addCities } from './actions';
import { getAllCities } from '../services/cities.service';

function* fetchCities() {
	const cities = yield getAllCities();
	yield put(addCities(cities));
}

// da namapiramo akcije na generatorske funckije sage
export function* rootSaga() {
	yield takeLatest(FETCH_CITIES, fetchCities);
}