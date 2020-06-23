/**
 * Action Types
 */
export enum Types {
  CALCULATE_REQUEST = '@compoundInterest/CALCULATE_REQUEST',
  CALCULATE_SUCCESS = '@compoundInterest/CALCULATE_SUCCESS',
  CALCULATE_FAILURE = '@compoundInterest/CALCULATE_FAILURE',
}

/**
 * Data Types
 */
export interface CompoundInterestModel {
  month: number
  accumulatedOfMonth: number
  yieldOfMonth: number
  totalYield: number
  totalInvested: number
  totalMonthlyContribution: number
}

export interface CompoundInterestParams {
  numberOfMonths: number
  amountInvested: number
  tax: number
  monthlyContribution: number
}

/**
 * State Types
 */
export interface CompoundInterestState {
  readonly simulation: CompoundInterestModel[]
  readonly loading: boolean
  readonly error: boolean
}

