import { City } from '../models/City';
import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './component-styles/city.css'
import { Category } from '../models/Category';
import CategoryCard from './categoryCard';


interface Props {
    city: City;
    categories: Category[];
  }
  
  interface State {
    city: City
  }


class CityComponent extends Component< Props,State> {
    render() {
      return (
        <div className='wraper'>
            <div className='container'>
              {this.props.categories.filter((category: Category)=> category.name != '').map((category: Category) => (
                <Link to = {'/' + category.name}><CategoryCard category ={category}/></Link>
              ))}
            </div>
        </div>
        
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
      // prop name <= store slice
      city: state.city,
      categories: state.categories
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
          
        
          
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CityComponent);