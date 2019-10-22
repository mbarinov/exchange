import React from 'react';
import { connect } from 'react-redux';

import { ratesSelectors } from 'modules/rates';

import { RateWrapper, RateHint } from './styled';
import { number, string } from 'prop-types';

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

Rate.propTypes = {
  fromCurrency: string,
  toCurrency: string,
  rate: number,
};

Rate.defaultProps = {
  fromCurrency: '',
  toCurrency: '',
  rate: null,
};

export const CurrentRate = connect((state, ownProps) => {
  return ratesSelectors.getCurrentRate(state)(
    ownProps.fromCurrency,
    ownProps.toCurrency,
  );
})(Rate);
