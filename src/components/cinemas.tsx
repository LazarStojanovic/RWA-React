import { Cinema } from '../models/Cinema';
import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './component-styles/cinemas.css'
import { City } from '../models/City';



interface Props {
    cinemas: Cinema[];
    city: City;
  }
  
  interface State {
    cinemas: Cinema[];
  }


class CinemasComponent extends Component<Props , State> {
    render() {
      return (
        <div>
          <div>
            <div>{this.props.cinemas.filter((cinema: Cinema) => cinema.cityId === this.props.city.id ).map((cinema: Cinema) => ( <h1>{cinema.name}</h1>))}</div>
          </div>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(CinemasComponent);