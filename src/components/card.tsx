import React,{Component} from 'react';
import { City } from '../models/City';
import './component-styles/card.css'

interface Props {
    city: City;
    onClick: Function;
  }
  
  interface State {
    city: City
    onClick: Function;
  }

class Card extends Component<State , Props> {
    render() {
      return (
        
      <div className='box'>
          <div className='imgBox'>
              <img src={this.props.city.image} alt="slika"/>
              
          </div>
          
          <div className="content">
              <h3><b>{this.props.city.name}</b></h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo magnam deleniti quos aliquid eligendi odit, inventore voluptatum sint debitis, consectetur, eum eius voluptatem quod blanditiis dignissimos cum temporibus quasi omnis.</p>
          </div>
      </div>
      )
    };
  }

  export default Card;