import React from 'react';
import { string, number, bool } from 'prop-types';
import { AccountWrapper, Info, Trifle } from './styles';

export function Account({ currency, total, isActive }) {
  const [amount, trifle] = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  })
    .format(total)
    .split('.');

  return (
    <AccountWrapper isActive={isActive}>
      <Info>
        {amount}
        <Trifle>.{trifle}</Trifle>
      </Info>
    </AccountWrapper>
  );
}

Account.propTypes = {
  isActive: bool,
  currency: string.isRequired,
  total: number.isRequired,
};

Account.defaultProps = {
  isActive: false,
};
