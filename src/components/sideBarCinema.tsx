import { Cinema } from '../models/Cinema';
import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './component-styles/cinemas.css'
import { City } from '../models/City';
import SideBarCinemaItem from './sideBarCinemaItem';


interface Props {
    cinemas: Cinema[];
    city: City;
  }
  
  interface State {
    cinemas: Cinema[];
  }


class SideBarCinema extends Component<Props , State> {
    render() {
      return (
        <div>
          {this.props.cinemas
                            .filter((cinema: Cinema) => cinema.cityId === this.props.city.id )
                            .map((cinema: Cinema) => ( <SideBarCinemaItem cinema = {cinema}/>))}
        </div>  
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
        cinemas: state.cinemas,
        city: state.city
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
          
        
          
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SideBarCinema);