import { Action } from "redux";
import { Cinema } from "../../models/Cinema";
import {
  selectedCinemaItem,
  SEND_CINEMAS_DATA
} from "../actions/cinemasActions";

const initialState: Cinema = {
  id: 1,
  name: "Neki Bg Cinema",
  adress: "Neka Adresa",
  cityId: 1
};
export function selectedCinemaReducer(
  state: Cinema = initialState,
  action: Action
) {
  switch (action.type) {
    case SEND_CINEMAS_DATA:
      const { cinema } = action as selectedCinemaItem;
      let bioskop: Cinema = {
        id: cinema.id,
        name: cinema.name,
        adress: cinema.adress,
        cityId: cinema.cityId
      };
      return bioskop;
    default:
      return state;
  }
}
export default selectedCinemaReducer;
