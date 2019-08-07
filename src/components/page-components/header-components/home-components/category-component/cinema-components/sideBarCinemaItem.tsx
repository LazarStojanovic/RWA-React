import { Cinema } from "../../../../../../models/Cinema";
import React, { Component, Dispatch } from "react";
import { Action } from "redux";
import { AppState } from "../../../../../../store";
import { connect } from "react-redux";
import "../../../../../component-styles/cinemas.css";
import "../../../../../component-styles/sideBarItem.css";
import { selectedCinemaItem } from "../../../../../../store/actions/cinemasActions";

interface Props {
  cinema: Cinema;
  clickedItem: Function;
}

interface State {
  cinema: Cinema;
}

class SideBarCinemaItem extends Component<Props, State> {
  render() {
    return (
      <div
        className="sideBarItem"
        onClick={() => {
          this.props.clickedItem(this.props.cinema);
        }}
      >
        <h2>{this.props.cinema.name}</h2>
        <h3>{this.props.cinema.adress}</h3>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {};
}
function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    clickedItem: (clickedItem: Cinema) =>
      dispatch(selectedCinemaItem(clickedItem))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarCinemaItem);
