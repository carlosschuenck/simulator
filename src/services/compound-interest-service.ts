import { CompoundInterestParams } from "../redux/modules/compound-interest/types";
import { CompoundInterestModel } from './../redux/modules/compound-interest/types';

class CompoundInterestService {
  private compounInterestList: Array<CompoundInterestModel> = [];
  private multiplier = 0;
  private totalYield = 0;
  private totalAccumulated = 0;
  private totalInvested = 0;
  private totalMonthlyContribution = 0;
  private accumulatedOfMonth = 0;
  private yieldOfMonth = 0;

  calculate(params: CompoundInterestParams): Array<CompoundInterestModel> {
    const { amountInvested, tax } = params;
    this.calculateMultiplier(tax)
    this.updateTotalAccumulated(amountInvested)
    this.updateTotalInvested(amountInvested);
    this.generateSimulation(params)
    return this.compounInterestList
  }

  private updateTotalInvested(newValue: number) {
    this.totalInvested = newValue;
  }

  private generateSimulation (params: CompoundInterestParams): void {
    const { numberOfMonths, amountInvested, monthlyContribution } = params;
    this.addInitialInvestment(amountInvested)
    for (let month = 1; month <= numberOfMonths; month++) {
      this.calculateAccumulatedOfMonth()
      this.calculateYieldOfMonth()
      this.updateTotalYield()
      this.updateTotalAccumulated(this.accumulatedOfMonth)
      this.sumMonthlyContribution(monthlyContribution)
      this.updateTotalMonthlyContribution(monthlyContribution)
      this.addNewSimulation(month)
    }
  }

  private addInitialInvestment (amountInvested: number): void {
    this.compounInterestList.push({
      month: 0,
      accumulatedOfMonth: amountInvested,
      yieldOfMonth: 0,
      totalYield: 0,
      totalInvested: this.totalInvested,
      totalMonthlyContribution: 0
    })
  }

  private calculateAccumulatedOfMonth (): void {
    this.accumulatedOfMonth = this.totalAccumulated * this.multiplier
  }

  private calculateYieldOfMonth (): void {
    this.yieldOfMonth = this.accumulatedOfMonth - this.totalAccumulated
  }

  private updateTotalYield (): void {
    this.totalYield += this.yieldOfMonth
  }

  private updateTotalAccumulated (newValue: number): void{
    this.totalAccumulated = newValue
  }

  private sumMonthlyContribution(monthlyContribution: number) {
    if (monthlyContribution) {
      this.accumulatedOfMonth += monthlyContribution;
      this.totalAccumulated += monthlyContribution;
      this.totalInvested += monthlyContribution;
    }
  }

  private calculateMultiplier (tax: number): void {
    this.multiplier = 1 + tax / 100
  }

  private updateTotalMonthlyContribution(newContribution: number){
    this.totalMonthlyContribution += newContribution;
  }

  private addNewSimulation (currentMonth: number): void {
    this.compounInterestList.push({
      month: currentMonth,
      accumulatedOfMonth: this.accumulatedOfMonth,
      yieldOfMonth: this.yieldOfMonth,
      totalYield: this.totalYield,
      totalInvested: this.totalInvested,
      totalMonthlyContribution: this.totalMonthlyContribution
    })
  }
}

export default CompoundInterestService;
