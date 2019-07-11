import { Restaurant } from '../models/Restaurant';
import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import './component-styles/cinemas.css'




interface Props {
    selectedRestaurant: Restaurant;
  }
  
  interface State {
    restaurant: Restaurant;
  }


class RestaurantReviewsComponent extends Component<Props , State> {
    render() {
      return (
        <div>
            <h2>{this.props.selectedRestaurant.name}</h2>
        </div>  
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
        selectedRestaurant: state.selectedRestaurant
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
          
      
          
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(RestaurantReviewsComponent);