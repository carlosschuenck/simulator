import React, { FunctionComponent } from 'react';
import { LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer  } from 'recharts';
  import CompoundInterestTooltip from './compound-interest-tooltip'

interface OwnProps {
  simulation: any[]
}

type Props = OwnProps;

const CompoundInterestLineChartComponent: FunctionComponent<Props> = ({ simulation }) => {
  return (
    <>
      { simulation.length > 0 && (
        <ResponsiveContainer width={'100%'} height={300}  >
          <LineChart data={simulation}>
            <Line type="monotone" dataKey="accumulatedOfMonth" stroke="green" />
            <Line type="monotone" dataKey="totalInvested" stroke="red" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis/>
            <Tooltip  content={<CompoundInterestTooltip/>} />
          </LineChart>
        </ResponsiveContainer>
      )
      }
    </>
  );
}

export default CompoundInterestLineChartComponent;
