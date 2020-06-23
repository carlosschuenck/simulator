import { put } from 'redux-saga/effects';
import CompoundInterestService from '../../../services/compound-interest-service';
import { calculateFailure, calculateSuccess } from './actions';
import { AnyAction } from 'redux';


export function* calculate({ payload }: AnyAction){
  try {
    const result = new CompoundInterestService().calculate(payload);
    yield put(calculateSuccess(result));
  } catch (error) {
    yield put(calculateFailure());
  }
}
