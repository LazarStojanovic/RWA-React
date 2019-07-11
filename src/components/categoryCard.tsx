import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import './component-styles/categoryCard.css'
import { AppState } from '../store';
import { connect } from 'react-redux';
import { sendDataToCityComponent } from '../store/actions';

interface Props {
    category: any;
  }
  
  interface State {
    category: any
  }

  
class categoryCard extends Component<Props,State> {
    render() {
      return (
      <div className='categoryCardBox'>
          <div className='categoryCardImgBox'>
              <img src={this.props.category.image} alt="slika"/> 
          </div>
          <div className="categoryCardContent">
              <h3><b>{this.props.category.name}</b></h3>
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
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(categoryCard);
