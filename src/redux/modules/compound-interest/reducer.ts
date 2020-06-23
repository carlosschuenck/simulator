import { Types, CompoundInterestState } from './types';
import { Reducer, AnyAction } from 'redux';


const initialState: CompoundInterestState = {
  simulation: [],
  error: false,
  loading: false
};

const reducer: Reducer<CompoundInterestState> = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case Types.CALCULATE_REQUEST:
      return { ...state, loading: true}
    case Types.CALCULATE_SUCCESS:
      return { ...state, loading: false, error: false, simulation: action.payload.simulation }
    case Types.CALCULATE_FAILURE:
      return { ...state, loading: false, error: true, simulation: []}
    default:
      return state
  }
}


export default reducer;
