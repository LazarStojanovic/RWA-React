import { Restaurant } from '../models/Restaurant';
import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './component-styles/restaurants.css'
import { fetchRestaurants } from '../store/restaurantsActions';
import { City } from '../models/City';
import SideBarRestaurants from './sideBarRestaurants';
import RestaurantReviewsComponent from './restaurantReviewsComponent';

interface Props {
    restaurants: Restaurant[];
    city: City;
  }
  
  interface State {
    restaurants: Restaurant[]
  }


class RestaurantsComponent extends Component<Props , State> {
    render() {
      return (
        <div>
          <div className ='grid'>
            <div className ='sideBar' >
                <SideBarRestaurants/>
            </div>
            <div className ='resourceContent' > 
                  <RestaurantReviewsComponent/>
            </div>
          </div>
        </div>
        
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
            restaurants: state.restaurants,
            city: state.city
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
           
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsComponent);