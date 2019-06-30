import React,{Component} from 'react';
import { City } from '../models/City';



interface Props {
    city: City;
  }
  
  interface State {
    city: City
  }


class CityComponent extends Component<State , Props> {
   
    render() {
      return (
        <div>
           <h1>{this.props.city.name}</h1>
        </div>
        
      )
    };
  }

  export default CityComponent;