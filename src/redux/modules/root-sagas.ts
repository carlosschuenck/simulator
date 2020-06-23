import { all, takeLatest } from 'redux-saga/effects'
import { Types } from './compound-interest/types';
import { calculate } from './compound-interest/sagas'

export default function* rootSaga(){
  return yield all([
    takeLatest(Types.CALCULATE_REQUEST, calculate)
  ])
}
