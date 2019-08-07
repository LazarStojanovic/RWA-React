import { Action } from "redux";
import { Cinema } from "../../models/Cinema";

import { ADD_CINEMAS, AddCinemas } from "../actions/cinemasActions";
const initialState: Cinema[] = [
  {
    id: 0,
    name: "",
    adress: "",
    cityId: 1
  }
];
export function cinemasReducer(state: Cinema[] = initialState, action: Action) {
  switch (action.type) {
    case ADD_CINEMAS:
      const { cinemas } = action as AddCinemas;
      return [...state, ...cinemas];
    default:
      return state;
  }
}

export default cinemasReducer;
