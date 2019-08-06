import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import './component-styles/sideBarRestaurants.css'
import { City } from '../models/City';
import SideBarRestaurantItem from './sideBarRestaurantItem';
import { Restaurant } from '../models/Restaurant';


interface Props {
    restaurants: Restaurant[];
    city: City;
  }
  
  interface State {
    restaurants: Restaurant[];
  }


class SideBarRestaurant extends Component<Props , State> {
    render() {
      return (
        <div className ="barContainer">
          {this.props.restaurants
                            .filter((restaurant: Restaurant) => restaurant.cityId === this.props.city.id )
                            .map((restaurant: Restaurant) => ( <SideBarRestaurantItem restaurant = {restaurant}/>))}
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(SideBarRestaurant);