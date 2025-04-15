import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';
import Count from './_problemInUseState/count/Count';
store.subscribe(()=> console.log( "from index page=> ", store.getState()))
//  above line of code is written to manage or track out state

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <hr />
      <Count/>
    </Provider>
  </React.StrictMode>
);


