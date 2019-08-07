import { Action } from "redux";
import { City } from "../../models/City";
import { ADD_CITIES, AddCities } from "../actions/cityActions";

const initialState: City[] = [
  {
    id: 1,
    name: "Beograd",
    image: "/Beograd.JPG",
    description:
      "Београд је главни и најнасељенији град Републике Србије и привредно, културно и образовно средиште земље. Град лежи на ушћу Саве у Дунав, где се Панонска низија спаја са Балканским полуострвом. Београд је управно средиште Града Београда, посебне територијалне јединице са својом месном самоуправом. По броју становника четврти је у југоисточној Европи после Истанбула, Атине и Букурешта."
  }
];
export function cityReducer(state: City[] = initialState, action: Action) {
  switch (action.type) {
    case ADD_CITIES:
      const { cities } = action as AddCities;
      return [...state, ...cities];

    default:
      return state;
  }
}

export default cityReducer;
