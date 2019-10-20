import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AccountsSelector } from './index';

describe('AccountsSelector', function() {
  let element;
  let onChange;
  const options = {
    activeAccountId: null,
    accounts: [
      {
        id: 1,
        symbol: '$',
        ticker: 'USD',
        amount: 1034.23,
      },
      {
        id: 2,
        symbol: '£',
        ticker: 'GBP',
        amount: 420.98,
      },
      {
        id: 3,
        symbol: '€',
        ticker: 'EUR',
        amount: 276.01,
      },
      {
        id: 4,
        symbol: '₽',
        ticker: 'RUB',
        amount: 41089,
      },
    ],
  };

  beforeEach(() => {
    onChange = jest.fn();
    options.onChange = onChange;

    element = render(<AccountsSelector {...options} />);
  });

  test('Render placeholder if activeAccountId isn`t specified', () => {
    expect(element.getByTestId('placeholder').innerHTML).toBe(
      'Click to select an Account',
    );
  });

  test('activeAccountId', () => {
    element.rerender(<AccountsSelector {...options} activeAccountId={1} />);
    expect(element.getByText('$1,034').innerHTML).toBe('$1,034');
  });

  test('Open dropdown', () => {
    fireEvent.click(element.getByTestId('placeholder'));

    expect(element.container.firstChild).toBeVisible();
  });

  test('Close dropdown', () => {
    fireEvent.click(element.getByTestId('placeholder'));
    fireEvent.click(element.getByTestId('placeholder'));

    expect(
      element.container.querySelectorAll('[data-testid="container"]').length,
    ).toBe(0);
  });

  test('Renders all options', () => {
    fireEvent.click(element.getByTestId('placeholder'));

    expect(
      element.container.querySelectorAll('[data-testid="currency-value"]')
        .length,
    ).toEqual(4);
  });

  test('onChange invokes', () => {
    fireEvent.click(element.getByTestId('placeholder'));
    fireEvent.click(
      element.container.querySelectorAll('[data-testid="currency-value"]')[1],
    );

    expect(onChange.mock.calls.length).toEqual(1);
  });

  test('onChange invokes with valid params', () => {
    fireEvent.click(element.getByTestId('placeholder'));
    fireEvent.click(
      element.container.querySelectorAll('[data-testid="currency-value"]')[1],
    );

    expect(onChange.mock.calls[0]).toEqual([2]);
  });
});
