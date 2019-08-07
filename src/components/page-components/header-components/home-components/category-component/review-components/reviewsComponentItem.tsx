import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../../../../../../store';
import { connect } from 'react-redux';
import '../../../../../component-styles/reviewsComponentItem.css'
import { Review } from '../../../../../../models/Review';



interface Props {
    review: Review;
  }
  
  interface State {
    review: Review;
  }


class ReviewsComponentItem extends Component<Props , State> {
    render() {
      return (
        <div className='reviewsComponentItem'>
            <h1>{this.props.review.name}</h1>
            <p>{this.props.review.text}</p>

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
  
  export default connect(mapStateToProps,mapDispatchToProps)(ReviewsComponentItem);