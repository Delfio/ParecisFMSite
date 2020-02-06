import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global'

import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';

export default function App() {

  return (
    <Router history={history}>
      <Routes />
      <ToastContainer autoClose={2500} />
      <GlobalStyle />
    </Router>
  );
}

