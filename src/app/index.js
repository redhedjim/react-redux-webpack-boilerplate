import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './utils/rootReducer';
import App from './appContainer/app';
import requireAuth from './utils/requireAuth';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(ReduxPromise, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f      
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);
