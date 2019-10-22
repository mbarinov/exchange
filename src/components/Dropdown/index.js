import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useClickOutside } from 'utils/use-click-outside';

import { DropdownContainer, Divider } from './styles';
import {
  arrayOf,
  bool,
  oneOfType,
  instanceOf,
  shape,
  func,
  string,
  number,
} from 'prop-types';

export default function Dropdown({
  visible,
  options,
  onSelect,
  onClose,
  renderKey,
  renderItem,
  selectorRef,
}) {
  const [isVisible, setVisible] = useState(visible);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  useEffect(() => {
    setWidth(selectorRef.current.getBoundingClientRect().width);
  }, [selectorRef]);

  useEffect(() => {
    const handler = () => {
      setVisible(false);
      onClose();
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [onClose]);

  useEffect(() => {
    const handler = e => {
      if (e.keyCode === 27 && isVisible) {
        setVisible(false);
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handler);
    }

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [isVisible, onClose]);

  useClickOutside({
    containerRefs: useMemo(() => [containerRef], []),
    handler: () => {
      setVisible(false);
      onClose();
    },
  });

  if (!isVisible || !options.length) return null;

  const DropdownOptions = options.map((o, idx) => (
    <div
      key={o[renderKey]}
      onClick={() => {
        setVisible(false);
        onSelect(o);
        onClose();
      }}
    >
      <div>
        {renderItem(o)}
        {idx < options.length - 1 && <Divider />}
      </div>
    </div>
  ));

  return (
    <DropdownContainer width={width} data-testid="container" ref={containerRef}>
      {DropdownOptions}
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  visible: bool,
  options: arrayOf(shape({})),
  onSelect: func,
  onClose: func,
  renderKey: oneOfType([string, number]),
  renderItem: func.isRequired,
  selectorRef: oneOfType([func, shape({ current: instanceOf(Element) })])
    .isRequired,
};

Dropdown.defaultProps = {
  visible: false,
  options: [],
  renderKey: 'id',
  onSelect: () => {},
  onClose: () => {},
};
