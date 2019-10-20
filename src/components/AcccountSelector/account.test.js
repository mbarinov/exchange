import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Account } from './account';

describe('Input', function() {
  let element;

  beforeEach(() => {
    const options = {
      currency: 'USD',
      total: 123.789,
    };

    element = render(<Account {...options} />);
  });

  test('Currency base value', () => {
    expect(element.getByTestId('currency-value').firstChild.innerHTML).toBe(
      '$123',
    );
  });

  test('Currency triffle value', () => {
    expect(element.getByTestId('currency-value').lastChild.innerHTML).toBe(
      '.79',
    );
  });

  test('Integer total', () => {
    const nextOptions = {
      currency: 'GBP',
      total: 100,
    };

    element.rerender(<Account {...nextOptions} />);

    expect(element.getByTestId('currency-value').lastChild.innerHTML).toBe(
      '.00',
    );
  });
});
