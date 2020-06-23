import React, { useState, FunctionComponent } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Tab,
  Tabs,
  AppBar,
} from '@material-ui/core';
import LineChartComponent from '../../components/chart/compound-interest-line-chart';
import CompoundInterestList from './compound-interest-list';
import { CompoundInterestModel } from '../../redux/modules/compound-interest/types'
import { connect } from 'react-redux'
import { ApplicationState } from '../../redux'
import { formatToCurrency } from '../../utils/currency';

interface StateProps {
  simulation: CompoundInterestModel[]
}

type Props = StateProps;

const CompoundInterestTabs: FunctionComponent<Props> = ({ simulation }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabs = (_:any, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  const tabProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `tablepanel-${index}`,
    };
  };

  const showResult = () => {
    const result = simulation[simulation.length - 1];
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Total acumulado: { formatToCurrency(result.accumulatedOfMonth) }
          </Typography>
          <Typography variant="h6" gutterBottom>
            Total investido: { formatToCurrency(result.totalInvested) }
          </Typography>
          <Typography variant="h6" gutterBottom>
            Total juros: { formatToCurrency(result.totalYield) }
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const tabRender = () => {
    if (simulation === null || simulation === undefined || simulation.length === 0) {
      return <></>;
    }

    switch (tabIndex) {
      case 0:
        return showResult();
      case 1:
        return (
          <Paper style={{ padding: '15px 30px 0px 20px' }}>
            <LineChartComponent simulation={simulation} />
          </Paper>
        );
      case 2:
        return <CompoundInterestList />;
      default:
        return <></>;
    }
  };

  return (
    <Grid container direction="column" justify="flex-start" spacing={3}>
      <Grid item xs={12}>
        {simulation?.length > 0 && (
          <AppBar position="static">
            <Tabs
              value={tabIndex}
              onChange={handleTabs}
              aria-label="Compound Interest Tabs"
            >
              <Tab label="Resultado" {...tabProps(0)} />
              <Tab label="Gráfico" {...tabProps(1)} />
              <Tab label="Progresso" {...tabProps(2)} />
            </Tabs>
          </AppBar>
        )}
        {tabRender()}
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  simulation: state.compoundInterest.simulation
})

export default connect(mapStateToProps)(CompoundInterestTabs);
