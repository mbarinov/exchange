import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Main } from 'pages/main';

import { accountsActions } from 'modules/accounts';
import { ratesActions } from 'modules/rates';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  background-color: rgba(var(--b3f, 250, 250, 250), 1);

  padding: 60px;
  & > * {
    width: 800px;
  }
`;

function App({
  isLoading,
  accounts,
  rates,
  fetchAccounts,
  fetchLastRates,
  mockRates,
  exchange,
}) {
  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts, mockRates]);

  useEffect(() => {
    fetchLastRates();
  }, [fetchLastRates]);

  if (isLoading) return null;

  return (
    <Wrapper>
      <Main accounts={accounts} rates={rates} exchange={exchange} />
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts.list,
    rates: state.rates.rates,
    isLoading: state.accounts.isLoading,
  };
};

export default connect(
  mapStateToProps,
  { ...accountsActions, ...ratesActions },
)(App);
