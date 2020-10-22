import React from 'react';
import App from './App';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import store from '../src/services/redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

Axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);