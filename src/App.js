import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import {store, persistor} from './store'
import history from './services/history';

import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={2500} />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

