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

//Service imports
import { fetchCities } from './store/actions';

//App
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
class App extends Component {
  componentWillMount() {
    store.dispatch(fetchCities())
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