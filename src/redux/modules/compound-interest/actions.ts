import { action } from 'typesafe-actions'
import { Types,  CompoundInterestModel, CompoundInterestParams} from './types'

export const calculateRequest = (params: CompoundInterestParams) => action(Types.CALCULATE_REQUEST, params)
export const calculateSuccess = (simulation: CompoundInterestModel[]) => action(Types.CALCULATE_SUCCESS, { simulation })
export const calculateFailure = () => action(Types.CALCULATE_FAILURE)
