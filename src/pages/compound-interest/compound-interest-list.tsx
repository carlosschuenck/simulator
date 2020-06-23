import React, { FunctionComponent } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { CompoundInterestModel } from '../../redux/modules/compound-interest/types'
import { connect } from 'react-redux'
import { ApplicationState } from '../../redux';
import { formatToCurrency } from '../../utils/currency';

interface StateProps {
  simulation: CompoundInterestModel[]
}

type Props = StateProps;

const CompoundInterestList: FunctionComponent<any> = ({ simulation }) => {

  return (
    <TableContainer component={Paper} style={{ maxHeight: '25rem',}}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Mês</TableCell>
            <TableCell align="left">Total acumulado</TableCell>
            <TableCell align="left">Total investido</TableCell>
            <TableCell align="left">Rendimento neste mês</TableCell>
            <TableCell align="left">Total de rendimentos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {simulation.map((result: any, month: number) => (
            <TableRow key={month}>
              <TableCell component="th" scope="row">{result.month}</TableCell>
              <TableCell align="left">{ result.accumulatedOfMonth }</TableCell>
              <TableCell align="left">{ result.totalInvested }</TableCell>
              <TableCell align="left">{ result.yieldOfMonth }</TableCell>
              <TableCell align="left">{ result.totalYield }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  simulation: state.compoundInterest.simulation.map(result => ({
    ...result,
    accumulatedOfMonth: formatToCurrency(result.accumulatedOfMonth),
    yieldOfMonth: formatToCurrency(result.yieldOfMonth),
    totalYield: formatToCurrency(result.totalYield),
    totalInvested: formatToCurrency(result.totalInvested),
    totalMonthlyContribution: formatToCurrency(result.totalMonthlyContribution)
  }))
})

export default connect(mapStateToProps)(CompoundInterestList);

// export default CompoundInterestList;