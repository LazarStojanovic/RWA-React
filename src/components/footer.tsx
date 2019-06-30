import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import './component-styles/footer.css'

interface Props {
    
} 
interface State {
    
}


class Footer extends Component<Props, State> {  
    render(){
        
        return(
            <div className ={'footer'} >
                <p>Lazar Stojanovic @2019</p>
            </div>
        )
    }
}
function mapStateToProps(state: AppState) {
	return {
		// prop name <= store slice
	
	};
}
function mapDispatchToProps(dispatch: Dispatch<Action>) {
	return {
        
        // prop name => dispatch action
        
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);