import React, { FunctionComponent } from 'react';
import { Container } from '@material-ui/core';
import CompoundInterestTabs from './compound-interest-tabs';
import CompoundInterestForm from './compound-interest-form';

const CompoundInterest: FunctionComponent = () => {
  return (
    <Container >
      <CompoundInterestForm />
      <CompoundInterestTabs />
    </Container>
  );
}

export default CompoundInterest;