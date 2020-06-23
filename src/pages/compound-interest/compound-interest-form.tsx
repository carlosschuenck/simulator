import { Button, Grid, TextField } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as CompoundInterestActions from '../../redux/modules/compound-interest/actions';
import { CompoundInterestParams } from '../../redux/modules/compound-interest/types';


interface DispatchProps {
  calculateRequest(request: CompoundInterestParams): void
}

type Props = DispatchProps;

const CompoundInterestForm: FunctionComponent<Props> = ({ calculateRequest }) => {
  const [amountInvested, setAmountInvested] = useState('1000')
  const [tax, setTax] = useState('1')
  const [numberOfMonths, setNumberOfMonths] = useState('12')
  const [monthlyContribution, setMonthlyContribution] = useState('150')


  async function calculate(){
    calculateRequest({
      numberOfMonths: Number(numberOfMonths),
      amountInvested: Number(amountInvested),
      tax: Number(tax),
      monthlyContribution: Number(monthlyContribution)
    });

  }

  return (
    <Grid container direction="row" spacing={3}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        item
        xs={12}
        spacing={3}
      >
        <Grid container item xs="auto" spacing={3}>
          <Grid item xs={12} xl={6} lg={6} md={4} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="amountInvested"
              id="amountInvested"
              type="number"
              label="Qual valor investido?"
              value={amountInvested}
              onChange={event => setAmountInvested(event.target.value)}
              />
          </Grid>
          <Grid item xs={12} xl={6} lg={6} md={4} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="monthlyContribution"
              id="monthlyContribution"
              type="number"
              label="Qual valor do aporte mensal?"
              value={monthlyContribution}
              onChange={event => setMonthlyContribution(event.target.value)}
              />
          </Grid>
        </Grid>
        <Grid container item xs="auto" spacing={3}>
          <Grid item xs={12} xl={6} lg={6} md={4} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="tax"
              id="tax"
              type="number"
              label="Qual é a taxa de juros mensal (%)?"
              value={tax}
              onChange={event => setTax(event.target.value)}
              />
          </Grid>
          <Grid item xs={12} xl={6} lg={6} md={4} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="numberOfMonths"
              id="numberOfMonths"
              type="number"
              label="Quantos meses?"
              value={numberOfMonths}
              onChange={event => setNumberOfMonths(event.target.value)}
              />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="default"
            onClick={calculate}
            >
            Calcular
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CompoundInterestActions, dispatch)
export default connect(null, mapDispatchToProps)(CompoundInterestForm);
