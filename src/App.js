import React from 'react';

import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import store from './store'
import history from './services/history';

import GlobalStyle from './styles/global'
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

