import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { AmountsContainer } from './amounts';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Amounts', function() {
  let store;

  beforeEach(() => {
    store = mockStore({
      rates: {
        isLoading: false,
        hasError: false,
        timestamp: null,
        base: null,
        rates: {
          GBP: 0.795108,
          RUB: 64.281,
          EUR: 0.906567,
        },
      },
    });
  });

  test('Empty render', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <AmountsContainer />
      </Provider>,
    );

    expect(getAllByText(/Enter amount/).length).toBe(2);
  });

  test('Render with valid props', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <AmountsContainer fromCurrency="USD" toCurrency="GBP" />
      </Provider>,
    );

    expect(getAllByText(/Enter amount/).length).toBe(2);

    getAllByText(/Enter amount/)[0].innerHTML.endsWith('USD');
    getAllByText(/Enter amount/)[1].innerHTML.endsWith('GBP');
  });

  test('Toggle currencies', () => {
    const { getAllByText, rerender } = render(
      <Provider store={store}>
        <AmountsContainer fromCurrency="USD" toCurrency="GBP" />
      </Provider>,
    );

    rerender(
      <Provider store={store}>
        <AmountsContainer fromCurrency="GBP" toCurrency="USD" />
      </Provider>,
    );

    getAllByText(/Enter amount/)[0].innerHTML.endsWith('GBP');
    getAllByText(/Enter amount/)[1].innerHTML.endsWith('USD');
  });

  test('Convert currencies', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <AmountsContainer
          fromCurrency="USD"
          toCurrency="GBP"
          onChange={onChange}
        />
      </Provider>,
    );

    const fromInput = container.querySelectorAll('input')[0];
    fireEvent.change(fromInput, { target: { value: 1000 } });
    const toInput = container.querySelectorAll('input')[1];

    expect(toInput.value).toEqual('795.11');
  });

  test('toCurrency is editable', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <AmountsContainer
          fromCurrency="USD"
          toCurrency="GBP"
          onChange={onChange}
        />
      </Provider>,
    );

    const fromInput = container.querySelectorAll('input')[0];
    const toInput = container.querySelectorAll('input')[1];
    fireEvent.change(toInput, { target: { value: 1000 } });

    expect(fromInput.value).toEqual('1257.69');
  });
});
