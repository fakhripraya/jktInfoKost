import App from './App';
import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/services/redux/store'
import { BrowserRouter } from 'react-router-dom';
import Spinner from './Spinner';

Axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Spinner />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);