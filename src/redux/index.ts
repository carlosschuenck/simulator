import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { CompoundInterestState } from './modules/compound-interest/types'
import rootReducer from './modules/root-reducer'
import rootSaga from './modules/root-sagas'

export interface ApplicationState {
  compoundInterest: CompoundInterestState
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
