import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dropdown from './index';

const commnonOptions = {
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
  renderKey: 'id',
  renderItem: item => <div data-testid={`item`}>{item.name}</div>,
};

const Wrapper = function(options) {
  const ref = useRef();
  return (
    <div>
      <input ref={ref} style={{ width: '200px' }} />
      <Dropdown selectorRef={ref} {...options} />
    </div>
  );
};

describe('Dropdown', function() {
  describe('Visibility', function() {
    test('If visility is false, it renders nothing.', () => {
      const { container } = render(<Wrapper {...commnonOptions} />);

      expect(container.querySelector('[data-testid]')).toBe(null);
    });

    test('It opens', () => {
      let { container, getByTestId, rerender } = render(
        <Wrapper {...commnonOptions} />,
      );

      expect(container.querySelector('[data-testid]')).toBe(null);

      rerender(<Wrapper {...commnonOptions} visible={true} />);

      expect(getByTestId('container')).toBeVisible();
    });

    test('It closes', () => {
      let { container, getByTestId, rerender } = render(
        <Wrapper {...commnonOptions} visible={true} />,
      );
      expect(getByTestId('container')).toBeVisible();

      rerender(<Wrapper {...commnonOptions} />);

      expect(container.querySelector('[data-testid]')).toBe(null);
    });
  });

  describe('onClose', function() {
    test('Handle onClose', () => {
      const onClose = jest.fn();

      let { container } = render(
        <Wrapper {...commnonOptions} visible={true} onClose={onClose} />,
      );

      fireEvent.click(container.querySelector('input'));

      expect(onClose.mock.calls.length).toBe(1);
    });

    test('exec onClose onResize', () => {
      const onClose = jest.fn();

      let { container } = render(
        <Wrapper {...commnonOptions} visible={true} onClose={onClose} />,
      );

      fireEvent(
        container.querySelector('input'),
        new MouseEvent('resize', {
          bubbles: true,
          cancelable: true,
        }),
      );

      expect(onClose.mock.calls.length).toBe(1);
    });

    test('exec onClose on esc', () => {
      const onClose = jest.fn();

      let { container } = render(
        <Wrapper {...commnonOptions} visible={true} onClose={onClose} />,
      );

      fireEvent.keyDown(container, {
        keyCode: 27,
      });

      expect(onClose.mock.calls.length).toBe(1);
      expect(container.querySelector('[data-testid]')).toBe(null);
    });
  });

  describe('Options', function() {
    it('Render items', () => {
      let { getByTestId, rerender } = render(
        <Wrapper {...commnonOptions} visible={true} />,
      );

      const items = getByTestId(`container`).firstChild.firstChild;

      expect(items.children.length).toBe(2);

      rerender(
        <Wrapper
          {...commnonOptions}
          visible={true}
          options={[
            {
              id: 1,
              name: 'test',
            },
          ]}
        />,
      );

      const nextItems = getByTestId(`container`).firstChild.firstChild;

      expect(nextItems.children.length).toBe(1);
    });

    it('uses renderKey', () => {
      let { getByTestId } = render(
        <Wrapper
          {...commnonOptions}
          visible={true}
          renderKey="uuid"
          options={[
            {
              uuid: 1,
              name: 'test',
            },
          ]}
        />,
      );

      const items = getByTestId(`container`).firstChild.firstChild;

      expect(items.children.length).toBe(1);
    });
  });

  describe('onSelect', function() {
    let onSelect;
    let onClose;
    let items;

    beforeEach(() => {
      onSelect = jest.fn();
      onClose = jest.fn();

      let { getByText } = render(
        <Wrapper
          {...commnonOptions}
          visible={true}
          options={[
            {
              id: 1,
              name: 'super test',
            },
          ]}
          onSelect={onSelect}
          onClose={onClose}
        />,
      );

      items = getByText(`super test`);
    });

    it('invoke onSelect', () => {
      fireEvent.click(items);
      expect(onSelect.mock.calls.length).toBe(1);
    });

    it('invoke onClose when onSelect', () => {
      fireEvent.click(items);
      expect(onClose.mock.calls.length).toBe(1);
    });

    it('invoke onSelect with correct params', () => {
      fireEvent.click(items);
      expect(onSelect.mock.calls[0]).toEqual([
        {
          id: 1,
          name: 'super test',
        },
      ]);
    });
  });
});
