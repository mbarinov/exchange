import React from 'react';
import { connect } from 'react-redux';

import { ratesSelectors } from 'modules/rates';

import { RateWrapper, RateHint } from './styled';

function Rate({ fromCurrency, toCurrency, rate }) {
  if (!fromCurrency || !toCurrency) return null;

  return (
    <RateWrapper>
      <div>
        Current rate for {fromCurrency}/{toCurrency}
      </div>
      <div>{Number(rate).toFixed(2)}</div>
      <RateHint>Updates every 10 seconds</RateHint>
    </RateWrapper>
  );
}

export const CurrentRate = connect((state, ownProps) => {
  return ratesSelectors.getCurrentRate(state)(
    ownProps.fromCurrency,
    ownProps.toCurrency,
  );
})(Rate);
