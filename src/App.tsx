import React,{Component} from 'react';
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//Redux imports
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import { rootReducer } from './store';
//Saga imports
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './store/sagas';

//Component imports
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import News from './components/news';
import Contact from './components/contact';
import About from './components/about';
import City from './components/city';
import Restaurants from './components/restaurants';
import Cinemas from './components/cinemas';

//Service imports
import { fetchCities } from './store/actions';
import { fetchRestaurants } from './store/restaurantsActions';
import { fetchCinemas } from './store/cinemasActions';
import {fetchCategories} from './store/categoryActions';
import { fetchReviews } from './store/reviewsActions';
//App
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
class App extends Component {
  componentWillMount() {
    store.dispatch(fetchCities())
    store.dispatch(fetchRestaurants())
    store.dispatch(fetchCinemas())
    store.dispatch(fetchCategories())
    store.dispatch(fetchReviews())
    
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Header />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/news'  component={News}/>
              <Route path='/contact'  component={Contact}/>
              <Route path='/about' component={About}/>
              <Route path= '/city'component={City}/>
              <Route path= '/Restaurant'component={Restaurants}/>
              <Route path= '/Cinema'component={Cinemas}/>
            </Switch>
            <Footer />
          </div>
        </Provider>
      </Router>
    )
  };
}

export default App;
/*
const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <p>YelpSerbia</p>
      <Header />
      <button onClick={() => store.dispatch(fetchCities())}>Fetch Cities</button>
    </div>
    </Provider>
  );
}

*/