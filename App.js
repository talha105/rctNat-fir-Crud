import React, { Component } from 'react';
import {Provider} from "react-redux";
import {createStore,compose,applyMiddleware} from "redux";
import reducers from "./Src/reducers"
import reduxThunk from "redux-thunk";
import Routes from './Src/routes/route';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers,{},composeEnhancers(applyMiddleware(reduxThunk)))

class App extends Component{
  render(){
    return(
        <Provider store={store}>
          <Routes/>
        </Provider>
    )
  }
}


export default App;
