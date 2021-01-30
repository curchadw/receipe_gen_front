import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import manageRecipes from './reducers/manageRecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(manageRecipes,composeEnhancer)

ReactDOM.render(
  
    <Provider store={store}>
    <App />
    </Provider>,
   
  document.getElementById('root')
);

