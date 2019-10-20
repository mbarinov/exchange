import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dropdown from './index';

const options = {
  visible: false,
  options: [
    {
      id: 1,
      name: 'test',
    },
    {
      id: 2,
      name: 'test2',
    },
  ],
  onSelect: () => {
    console.log('onSelect');
  },
  onClose: () => {
    console.log('close');
  },
  renderKey: 'id',
  renderItem: item => <div>test {item.name}</div>,
};

describe('Dropdown', function() {
  test('If visility is false, it renders nothing.', () => {
    const { container } = render(<Dropdown {...options} />);

    expect(container.innerHTML).toBe('');
  });

  test('It opens', () => {
    let { container, getByTestId, rerender } = render(
      <Dropdown {...options} />,
    );

    expect(container.innerHTML).toBe('');

    rerender(<Dropdown {...options} visible={true} />);

    expect(getByTestId('container')).toBeVisible();
  });

  test('It closes', () => {
    let { container, getByTestId, rerender } = render(
      <Dropdown {...options} visible={true} />,
    );
    expect(getByTestId('container')).toBeVisible();

    rerender(<Dropdown {...options} />);
    expect(container.innerHTML).toBe('');
  });
});
