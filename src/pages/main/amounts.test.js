import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Amounts } from './amounts';

describe('Amounts', function() {
  test('Valid render', () => {
    const { getAllByText } = render(<Amounts />);

    expect(getAllByText(/Enter amount/).length).toBe(2);
  });

  test('Render with valid props', () => {
    const { getAllByText } = render(
      <Amounts fromCurrency="USD" toCurrency="GBP" rate="0.795108" />,
    );

    expect(getAllByText(/Enter amount/)[0].innerHTML.endsWith('USD')).toBe(
      true,
    );
    expect(getAllByText(/Enter amount/)[1].innerHTML.endsWith('GBP')).toBe(
      true,
    );
  });

  test('Render with valid props when rate is undefined', () => {
    const { container } = render(
      <Amounts fromCurrency="USD" toCurrency="GBP" />,
    );
    const fromInput = container.querySelectorAll('input')[0];
    const toInput = container.querySelectorAll('input')[1];

    expect(fromInput.value).toBe('');
    expect(toInput.value).toBe('');
  });

  describe('Rates', () => {
    let fromInput;
    let toInput;
    let onChange;
    let container;

    beforeAll(() => {
      onChange = jest.fn();
      const process = render(
        <Amounts
          fromCurrency="USD"
          toCurrency="GBP"
          onChange={onChange}
          rate="0.795108"
        />,
      );

      container = process.container;

      fromInput = container.querySelectorAll('input')[0];
      toInput = container.querySelectorAll('input')[1];
    });

    test('Convert rates automatically', () => {
      fireEvent.change(fromInput, { target: { value: 1000 } });

      expect(toInput.value).toEqual('795.11');
      fireEvent.change(fromInput, { target: { value: 2000 } });

      expect(toInput.value).toEqual('1590.22');

      expect(onChange.mock.calls.length).toBe(2);
    });

    test('Update rates', () => {
      const { container, rerender } = render(
        <Amounts
          fromCurrency="USD"
          toCurrency="GBP"
          onChange={onChange}
          rate="0.795108"
        />,
      );

      fromInput = container.querySelectorAll('input')[0];
      toInput = container.querySelectorAll('input')[1];

      fireEvent.change(fromInput, { target: { value: 1000 } });
      expect(toInput.value).toEqual('795.11');

      rerender(
        <Amounts
          fromCurrency="USD"
          toCurrency="GBP"
          onChange={onChange}
          rate="0.8951"
        />,
      );

      expect(toInput.value).toBe('895.1');
    });

    test('Reset values onToggle accounts', () => {
      const { container, rerender } = render(
        <Amounts
          fromCurrency="USD"
          toCurrency="GBP"
          onChange={onChange}
          rate="0.795108"
        />,
      );

      fromInput = container.querySelectorAll('input')[0];
      toInput = container.querySelectorAll('input')[1];

      fireEvent.change(fromInput, { target: { value: 1000 } });

      expect(fromInput.value).toBe('1000');
      expect(toInput.value).toBe('795.11');

      rerender(<Amounts onChange={onChange} rate="0.795108" />);

      expect(fromInput.value).toBe('0');
      expect(toInput.value).toBe('');
    });

    test('onChange validation', () => {
      onChange = jest.fn();
      const { container } = render(
        <Amounts
          fromCurrency="USD"
          toCurrency="GBP"
          onChange={onChange}
          rate="0.795108"
        />,
      );

      fromInput = container.querySelectorAll('input')[0];
      toInput = container.querySelectorAll('input')[1];

      fireEvent.change(fromInput, { target: { value: 'aad' } });

      expect(fromInput.value).toBe('');
    });

    test('set values when rate is undefined', () => {
      onChange = jest.fn();
      const { container } = render(
        <Amounts fromCurrency="USD" toCurrency="GBP" onChange={onChange} />,
      );

      fromInput = container.querySelectorAll('input')[0];
      toInput = container.querySelectorAll('input')[1];

      fireEvent.change(fromInput, { target: { value: 100 } });

      expect(toInput.value).toBe('');
    });

    test('from input changes automatically when user edits to input', () => {
      onChange = jest.fn();
      const { container } = render(
        <Amounts
          fromCurrency="USD"
          toCurrency="GBP"
          rate="0.795108"
          onChange={onChange}
        />,
      );

      fromInput = container.querySelectorAll('input')[0];
      toInput = container.querySelectorAll('input')[1];

      fireEvent.change(toInput, { target: { value: 100 } });

      expect(fromInput.value).toBe('125.77');
    });
  });
});
