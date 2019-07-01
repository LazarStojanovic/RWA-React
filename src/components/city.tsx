import { City } from '../models/City';
import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import './component-styles/city.css'


interface Props {
    city: City;
  }
  
  interface State {
    city: City
  }


class CityComponent extends Component<State , Props> {
  
    render() {
      return (
        <div className='wraperCity'>
            <div className='containerCity'>
              <div>
                <h1>{this.props.city.name}</h1>
              </div>
            </div>
        </div>
        
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
      // prop name <= store slice
      city: state.city
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
          
        
          
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CityComponent);