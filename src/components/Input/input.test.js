import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Input } from './index';

describe('Input', function() {
  let onChange;
  let onFocus;
  let onBlur;
  let element;

  beforeEach(() => {
    onChange = jest.fn();
    onFocus = jest.fn();
    onBlur = jest.fn();
    const options = {
      value: '123.123',
      placeholder: 'test placeholder',
      onChange,
      onFocus,
      onBlur,
    };

    element = render(<Input {...options} />);
  });

  test('Placeholder', () => {
    expect(element.getByTestId('placeholder').innerHTML).toBe(
      'test placeholder',
    );
  });

  test('Default value', () => {
    expect(element.getByTestId('input').value).toBe('123.123');
  });

  test('Placeholder focus', () => {
    fireEvent.click(element.getByTestId('placeholder'));

    expect(document.activeElement).toEqual(element.getByTestId('input'));
  });

  test('onFocus invokes', () => {
    fireEvent.click(element.getByTestId('placeholder'));

    expect(onFocus.mock.calls.length).toBe(1);
  });

  test('onBlur invokes', () => {
    fireEvent.click(element.getByTestId('placeholder'));
    fireEvent.click(element.getByTestId('placeholder'));

    expect(onBlur.mock.calls.length).toBe(1);
  });

  describe('onChange', function() {
    it('onChange invokes', () => {
      fireEvent.change(element.getByTestId('input'), {
        target: { value: 100 },
      });

      expect(element.getByTestId('input').value).toEqual('100');
    });

    it('onChange empty string', () => {
      fireEvent.change(element.getByTestId('input'), {
        target: { value: '' },
      });

      expect(element.getByTestId('input').value).toEqual('');
    });

    it('non-digit input doesn`t invoke onChange', () => {
      fireEvent.change(element.getByTestId('input'), {
        target: { value: '10,123' },
      });

      expect(onChange.mock.calls[0]).toEqual(undefined);
    });
  });
});
