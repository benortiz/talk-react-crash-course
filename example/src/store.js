import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const reducers = combineReducers({
  someKey: (state) => state || {},
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(function* helloSaga() {
  console.log('sagas!');
})
