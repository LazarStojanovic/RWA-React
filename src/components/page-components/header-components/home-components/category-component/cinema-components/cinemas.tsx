import { Cinema } from "../../../../../../models/Cinema";
import React, { Component, Dispatch } from "react";
import { Action } from "redux";
import { AppState } from "../../../../../../store";
import { connect } from "react-redux";
import "../../../../../component-styles/cinemas.css";
import { City } from "../../../../../../models/City";
import SideBarCinema from "./sideBarCinema";
import CinemaReviewsComponent from "./cinemaReviewsComponent";

interface Props {
  cinemas: Cinema[];
  city: City;
}

interface State {
  cinemas: Cinema[];
}

class CinemasComponent extends Component<Props, State> {
  render() {
    return (
      <div>
        <div className="grid">
          <div className="sideBar">
            <SideBarCinema />
          </div>
          <div className="resourceContent">
            <CinemaReviewsComponent />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    cinemas: state.cinemas,
    city: state.city
  };
}
function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CinemasComponent);
