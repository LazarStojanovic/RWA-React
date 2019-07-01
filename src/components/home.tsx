import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import { City } from '../models/City';
import './component-styles/home.css'
import Card from './card';
import {Link} from 'react-router-dom';
import { sendDataToCityComponent } from '../store/actions';

interface Props {
  cities?: City[];
}

interface State {
  name: string;
  image:string;
}

class Home extends Component<Props, State> {
   
    render() {
      if (!this.props.cities) {
        //if (!this.props.books || !this.props.selected || !this.p) {
        return <h1>No Cities</h1>;
      }
      return (
        
        <div className='wraper'>
            <div className='container'>
                {this.props.cities.map((city: City) => (
                  <Link to='/city'><Card city={city} /></Link>
              ))}
            </div>
        </div>
        
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
      // prop name <= store slice
      cities: state.cities
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
          
      
          
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);