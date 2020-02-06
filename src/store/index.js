import createSagaMiddleware from 'redux-saga';
import createStore from './createStorage';

import  rootReducer from './modules/rootReducer';
import  rootSaga from './modules/rootSaga';

const sagaMonitor = process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null;

const sagaMiddlewares = createSagaMiddleware( {sagaMonitor} )

const middlewares = [sagaMiddlewares];

const store = createStore(rootReducer, middlewares);

sagaMiddlewares.run(rootSaga);

export default store;