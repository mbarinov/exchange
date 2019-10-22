import React, { useState, useEffect, useCallback, useRef } from 'react';
import { number, string, arrayOf, func, shape } from 'prop-types';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Account } from './account';
import Dropdown from 'components/Dropdown';

import { Wrapper, Controls, SelectAccount } from './styles';

export function AccountsSelector({ activeAccountId, accounts, onChange }) {
  const getAccountById = useCallback(
    id => {
      return accounts.find(i => i.id === id);
    },
    [accounts],
  );
  const ref = useRef();
  const [activeAccount, setActiveAccount] = useState(() =>
    getAccountById(activeAccountId),
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const account = getAccountById(activeAccountId);

    setActiveAccount(account);
  }, [activeAccountId, accounts, getAccountById]);

  return (
    <div>
      <Wrapper
        ref={ref}
        onClick={() => {
          if (!isDropdownVisible) {
            setDropdownVisible(!isDropdownVisible);
          }
        }}
      >
        {!activeAccount && (
          <SelectAccount data-testid="placeholder">
            Click to select an Account
          </SelectAccount>
        )}
        {activeAccount && (
          <Account
            currency={activeAccount.ticker}
            total={activeAccount.amount}
          />
        )}
        <Controls>
          <MdKeyboardArrowDown />
        </Controls>
      </Wrapper>
      <Dropdown
        selectorRef={ref}
        visible={isDropdownVisible}
        options={accounts}
        renderKey="id"
        renderItem={item => (
          <Account
            isActive={activeAccountId === item.id}
            key={item.id}
            currency={item.ticker}
            total={item.amount}
          />
        )}
        onSelect={selectedAccount => {
          onChange(selectedAccount.id);
        }}
        onClose={() => {
          setDropdownVisible(false);
        }}
      />
    </div>
  );
}

AccountsSelector.propTypes = {
  activeAccountId: number,
  accounts: arrayOf(
    shape({
      id: number.isRequired,
      ticker: string.isRequired,
      amount: number.isRequired,
    }),
  ).isRequired,
  onChange: func.isRequired,
};

AccountsSelector.defaultProps = {
  activeAccountId: null,
};
