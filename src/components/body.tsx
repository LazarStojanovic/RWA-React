import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import { City } from '../models/City';
import './component-styles/body.css'
//import { addCity } from '../store/actions';

interface Props {
    cities?: City[];
}

interface State {
    name: string;
}


class Body extends Component<Props, State> {
    
    
    render(){
        if (!this.props.cities) {
			//if (!this.props.books || !this.props.selected || !this.p) {
			return <h1>No Cities</h1>;
		}
        return(
            <div className='background'> 
            {this.props.cities.map((city: City) => (
                <li>
                    {city.name}
                </li>
            ))}
            </div>
        )
    }
}

function mapStateToProps(state: AppState) {
	return {
		// prop name <= store slice
		cities: state.cities
	};
}
function mapDispatchToProps(dispatch: Dispatch<Action>) {
	return {
        
        // prop name => dispatch action
        
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);