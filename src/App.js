import React from 'react';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global'

import './config/ReactotronConfig';

import store from './store'

import { ToastContainer } from 'react-toastify';

export default function App() {

  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <ToastContainer autoClose={2500} />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

