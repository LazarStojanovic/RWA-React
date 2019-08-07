import { Action } from "redux";
import { City } from "../../models/City";
import { sendDataToCityComponent, SEND_DATA } from "../actions/cityActions";

const initialState: City = {
  id: 1,
  name: "Beograd",
  image: "/Beograd.JPG",
  description:
    "Београд је главни и најнасељенији град Републике Србије и привредно, културно и образовно средиште земље. Град лежи на ушћу Саве у Дунав, где се Панонска низија спаја са Балканским полуострвом. Београд је управно средиште Града Београда, посебне територијалне јединице са својом месном самоуправом. По броју становника четврти је у југоисточној Европи после Истанбула, Атине и Букурешта."
};
export function cityComponentReducer(
  state: City = initialState,
  action: Action
) {
  switch (action.type) {
    case SEND_DATA:
      const { city } = action as sendDataToCityComponent;
      let grad: City = {
        id: city.id,
        name: city.name,
        image: city.image,
        description: city.description
      };
      return grad;
    default:
      return state;
  }
}

export default cityComponentReducer;
