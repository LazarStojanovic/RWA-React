import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { City } from '../../../../models/City';
import '../../../component-styles/card.css'
import { AppState } from '../../../../store';
import { connect } from 'react-redux';
import { sendDataToCityComponent } from '../../../../store/actions/cityActions';

interface Props {
    city: City;
    addData: Function;
  }
  
  interface State {
    city: City
  }

  
class Card extends Component<Props,State> {
    render() {
      return (
      <div className='box' onClick = {() => {this.props.addData(this.props.city)}}>
          <div className='imgBox'>
              <img src={this.props.city.image} alt="slika"/> 
          </div>
          
          <div className="content">
              <h3><b>{this.props.city.name}</b></h3>
              <p>{this.props.city.description}</p>
          </div>
      </div>
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
      
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
          
        addData: (newState:City) => dispatch(sendDataToCityComponent(newState)),
          
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Card);
