import React, { FunctionComponent, useEffect, useState} from 'react';
import { formatToCurrency } from '../../utils/currency';


const CompoundInterestTooltip: FunctionComponent<any> = ( { active, payload, label } ) => {

    const [ accumulatedOfMonth, setAccumulatedOfMonth ] = useState('');
    const [ yieldOfMonth, setYieldOfMonth ] = useState('');
    const [ totalYield, setTotalYield ] = useState('');
    const [ totalInvested, setTotalInvested ] = useState('');

    useEffect(() => {
      if (active) {
        const {
                accumulatedOfMonth,
                yieldOfMonth,
                totalYield,
                totalInvested,
              } = payload[0].payload;
        setAccumulatedOfMonth(formatToCurrency(accumulatedOfMonth));
        setYieldOfMonth(formatToCurrency(yieldOfMonth));
        setTotalYield(formatToCurrency(totalYield));
        setTotalInvested(formatToCurrency(totalInvested));
      }
    }, [active, payload, label])

  return (
    <>
      { active ? (
      <div
        style={{
          margin: '0px',
          lineHeight: '24px',
          border: '1px solid #f5f5f5',
          backgroundColor: 'hsla(0,0%,100%,.8)',
          padding: '10px',
        }}
      >
        <p className="label">{`Mês: ${label}`}</p>
        <p>
          <label>
            Total acumulado: { accumulatedOfMonth }
          </label>
        </p>
        <p>
          <label>Total investido: { totalInvested }</label>
        </p>
        <p>
          <label>
            Rendimento neste mês: { yieldOfMonth }
          </label>
        </p>
        <p>
          <label>Total de rendimentos: { totalYield }</label>
        </p>
      </div>
      ) : <></> }
    </>
  );
}

export default CompoundInterestTooltip;
