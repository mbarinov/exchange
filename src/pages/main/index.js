import React, { useEffect, useState } from 'react';

import AccountsSelector from 'components/AcccountSelector';
import { Button } from 'components/Button';

import { AmountsContainer } from './amounts';
import { CurrentRate } from './rate';
import { AccountsWrapper, Title, Controls } from './styled';

export function Main({ accounts, exchange }) {
  const [fromAccountId, setFromAccountId] = useState();
  const [toAccountId, setToAccountId] = useState();

  const [fromAccount, setFromAccount] = useState();
  const [toAccount, setToAccount] = useState();

  const [fromAmount, setFromAmount] = useState();

  useEffect(() => {
    const getAccountById = id => accounts.find(i => i.id === id);

    const from = getAccountById(fromAccountId);
    const to = getAccountById(toAccountId);

    setFromAccount(from);
    setToAccount(to);
  }, [fromAccountId, toAccountId, accounts]);

  const isBtnDisabled =
    !fromAccount || !toAccount || fromAccount.amount < fromAmount;

  return (
    <div>
      <AccountsWrapper>
        <Title>From</Title>
        <Title></Title>
        <Title>To</Title>

        <AccountsSelector
          activeAccountId={fromAccountId}
          accounts={accounts}
          onChange={selectedAccountId => {
            if (toAccountId === selectedAccountId) {
              setToAccountId();
            }

            setFromAccountId(selectedAccountId);
          }}
        />

        <Controls
          onClick={() => {
            if (fromAccountId || toAccountId) {
              setToAccountId(fromAccountId);
              setFromAccountId(toAccountId);
            }
          }}
        />

        <AccountsSelector
          activeAccountId={toAccountId}
          accounts={accounts}
          onChange={selectedAccountId => {
            if (fromAccountId === selectedAccountId) {
              setFromAccountId();
            }

            setToAccountId(selectedAccountId);
          }}
        />
      </AccountsWrapper>

      <AmountsContainer
        fromCurrency={fromAccount && fromAccount.ticker}
        toCurrency={toAccount && toAccount.ticker}
        onChange={({ fromAmount }) => {
          setFromAmount(fromAmount);
        }}
      />

      <CurrentRate
        fromCurrency={fromAccount && fromAccount.ticker}
        toCurrency={toAccount && toAccount.ticker}
      />

      <Button
        disabled={isBtnDisabled}
        onClick={() => {
          exchange({
            fromAccountId,
            toAccountId,
            amount: fromAmount,
          });
        }}
      >
        Exchange
      </Button>
    </div>
  );
}
