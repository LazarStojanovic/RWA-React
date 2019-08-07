import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { City } from '../../models/City';
import '../component-styles/header.css'
import {Link} from 'react-router-dom';
//import { addCity } from '../store/actions';

interface Props {
    cities?: City[];
}

interface State {
    name: string;
}


class Header extends Component<Props, State> {
    
    
    render(){
        if (!this.props.cities) {
			//if (!this.props.books || !this.props.selected || !this.p) {
			return <h1>No Cities</h1>;
		}
        return(
            
            <div className ='header'>
                
                <div className = 'innerHeader'>
                    <div className='logoContainer'>
                        <h1>Yelp<span>Serbia</span></h1>
                    </div>
                    <ul className ='navigation'>
                        <Link to='/'><li><span>Home</span></li></Link>
                        <Link to='/news'><li><span>News</span></li></Link>
                        <Link to='/contact'><li><span>Contact</span></li></Link>
                        <Link to='/about'><li><span>About</span></li></Link>
                     </ul>
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);