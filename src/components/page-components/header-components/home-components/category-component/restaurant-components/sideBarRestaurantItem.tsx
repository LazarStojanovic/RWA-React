import { Restaurant } from "../../../../../../models/Restaurant";
import React, { Component, Dispatch } from "react";
import { Action } from "redux";
import { AppState } from "../../../../../../store";
import { connect } from "react-redux";
import "../../../../../component-styles/sideBarItem.css";
import { selectedRestaurantItem } from "../../../../../../store/actions/restaurantsActions";

interface Props {
  restaurant: Restaurant;
  clickedItem: Function;
}

interface State {
  restaurant: Restaurant;
}

class SideBarRestaurantItem extends Component<Props, State> {
  render() {
    return (
      <div
        className="sideBarItem"
        onClick={() => {
          this.props.clickedItem(this.props.restaurant);
        }}
      >
        <h2>{this.props.restaurant.name}</h2>
        <h3>{this.props.restaurant.adress}</h3>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {};
}
function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    clickedItem: (clickedItem: Restaurant) =>
      dispatch(selectedRestaurantItem(clickedItem))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarRestaurantItem);
