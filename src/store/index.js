import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStorage';

import persistedReducers from './persistReducers'

import  rootReducer from './modules/rootReducer';
import  rootSaga from './modules/rootSaga';

const sagaMonitor = process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null;

const sagaMiddlewares = createSagaMiddleware( {sagaMonitor} )

const middlewares = [sagaMiddlewares];

const store = createStore(persistedReducers(rootReducer), middlewares);
const persistor = persistStore(store)

sagaMiddlewares.run(rootSaga);

export {store, persistor};