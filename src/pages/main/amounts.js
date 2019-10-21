import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ratesSelectors } from 'modules/rates';
import { Input } from 'components/Input';
import { getSymbolsAfterDot } from 'utils/get-symbol-after-dot';
import { usePrevious } from 'utils/use-previous';

import { AmountsWrapper, Title } from './styled';

export function Amounts({ fromCurrency, toCurrency, rate, onChange }) {
  const [giveAmount, setGiveAmount] = useState('');
  const [getAmount, setGetAmount] = useState('');

  const [isGetInputFocused, setInputFocused] = useState(false);

  const prevFromCurrency = usePrevious(fromCurrency);
  const prevToCurrency = usePrevious(toCurrency);

  useEffect(() => {
    if (fromCurrency && rate && !isGetInputFocused) {
      let value = giveAmount * rate;

      if (getSymbolsAfterDot(value) >= 2) {
        value = value.toFixed(2);
      }

      setGetAmount(value);
    } else if (rate) {
      let value = getAmount / rate;

      if (getSymbolsAfterDot(value) >= 2) {
        value = value.toFixed(2);
      }

      setGiveAmount(value);
    }
  }, [
    getAmount,
    fromCurrency,
    toCurrency,
    rate,
    giveAmount,
    setGetAmount,
    isGetInputFocused,
  ]);

  useEffect(() => {
    if (giveAmount && getAmount) {
      onChange({ fromAmount: giveAmount, toAmount: getAmount });
    }
  }, [getAmount, giveAmount, onChange]);
  /**
   * toggle счетов usd/gbp -> gbp/usd
   */
  useEffect(() => {
    if (
      fromCurrency &&
      toCurrency &&
      fromCurrency === prevToCurrency &&
      toCurrency === prevFromCurrency
    ) {
      setGiveAmount(getAmount);
      setGetAmount(giveAmount);
    }
  }, [
    fromCurrency,
    prevFromCurrency,
    toCurrency,
    prevToCurrency,
    getAmount,
    setGetAmount,
    giveAmount,
    setGiveAmount,
  ]);

  /**
   * Сбросить все инпуты, когда пользователь пытается выбрать одинаковые валюты.
   */
  useEffect(() => {
    if (
      (!fromCurrency && prevFromCurrency) ||
      (!toCurrency && prevToCurrency)
    ) {
      setGiveAmount('');
      setGetAmount('');
    }
  }, [fromCurrency, prevFromCurrency, toCurrency, prevToCurrency]);

  return (
    <AmountsWrapper data-testid="amounts-wrapper">
      <Title>You give:</Title>
      <Title>You'll get:</Title>
      <Input
        placeholder={`Enter amount ${fromCurrency || ''}`}
        value={giveAmount}
        onChange={e => {
          setGiveAmount(e);
          if (rate) {
            let value = e * rate;

            if (getSymbolsAfterDot(value) >= 2) {
              value = value.toFixed(2);
            }

            setGetAmount(value);
          } else {
            setGetAmount('');
          }
        }}
      />

      <Input
        placeholder={`Enter amount ${toCurrency || ''}`}
        value={getAmount}
        onChange={e => {
          setGetAmount(e);
          if (rate) {
            let value = e / rate;

            if (getSymbolsAfterDot(value) >= 2) {
              value = value.toFixed(2);
            }

            setGiveAmount(value);
          } else {
            setGiveAmount('');
          }
        }}
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => {
          setInputFocused(false);
        }}
      />
    </AmountsWrapper>
  );
}

export const AmountsContainer = connect((state, ownProps) => {
  return ratesSelectors.getCurrentRate(state)(
    ownProps.fromCurrency,
    ownProps.toCurrency,
  );
})(Amounts);
