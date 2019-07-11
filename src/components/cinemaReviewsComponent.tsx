import { Cinema } from '../models/Cinema';
import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import './component-styles/cinemas.css'
import { selectedCinemaItem } from '../store/cinemasActions';




interface Props {
    selectedCinema: Cinema;
  }
  
  interface State {
    cinema: Cinema;
  }


class CinemaReviewsComponent extends Component<Props , State> {
    render() {
      return (
        <div>
            <h2>{this.props.selectedCinema.name}</h2>
        </div>  
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
        selectedCinema: state.selectedCinema
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
          
      
          
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CinemaReviewsComponent);