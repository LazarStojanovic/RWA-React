import { Restaurant } from "../../../../../../models/Restaurant";
import React, { Component, Dispatch } from "react";
import { Action } from "redux";
import { AppState } from "../../../../../../store";
import { connect } from "react-redux";
import "../../../../../component-styles/restaurantReviewsComponent.css";
import { Review } from "../../../../../../models/Review";
import ReviewsComponentItem from "../review-components/reviewsComponentItem";

interface Props {
  selectedRestaurant: Restaurant;
  reviews: Review[];
}

interface State {
  restaurant: Restaurant;
  reviews: Review[];
}

class RestaurantReviewsComponent extends Component<Props, State> {
  render() {
    return (
      <div className="reviewsComponentBody">
        {this.props.reviews
          .filter(
            (review: Review) =>
              review.restaurantId === this.props.selectedRestaurant.id
          )
          .map((review: Review) => (
            <ReviewsComponentItem review={review} />
          ))}
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    selectedRestaurant: state.selectedRestaurant,
    reviews: state.reviews
  };
}
function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantReviewsComponent);
