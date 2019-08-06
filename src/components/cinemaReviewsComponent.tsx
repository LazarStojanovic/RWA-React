import { Cinema } from '../models/Cinema';
import React, { Component, Dispatch} from 'react';
import { Action} from 'redux';
import { AppState } from '../store';
import { connect } from 'react-redux';
import './component-styles/cinemas.css'
import { Review } from '../models/Review';
import ReviewsComponentItem from './reviewsComponentItem';



interface Props {
    selectedCinema: Cinema;
    reviews: Review[];
  }
  
  interface State {
    cinema: Cinema;
    reviews: Review[];
  }


class CinemaReviewsComponent extends Component<Props , State> {
    render() {
      return (
        <div>
            <h1>{this.props.selectedCinema.name}</h1>
            {this.props.reviews
                            .filter((review: Review) => review.cinemaId === this.props.selectedCinema.id )
                            .map((review: Review) => ( <ReviewsComponentItem review = {review}/>))}
        </div>  
      )
    };
  }

  function mapStateToProps(state: AppState) {
    return {
        selectedCinema: state.selectedCinema,
        reviews: state.reviews
    };
  }
  function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
          
      
          
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CinemaReviewsComponent);