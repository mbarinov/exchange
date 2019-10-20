import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Placeholder, StyledInput } from './styled';

export function Input({
  value,
  placeholder,
  onChange,
  onFocus = () => {},
  onBlur = () => {},
}) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <Wrapper>
      <Placeholder
        onClick={() => {
          inputRef.current.focus();
        }}
        className={!isFocused && inputValue === '' ? 'empty' : ''}
      >
        {placeholder}
      </Placeholder>
      <StyledInput
        ref={inputRef}
        value={inputValue}
        onChange={e => {
          const rawValue = e.target.value;

          if (rawValue === '') {
            setInputValue(rawValue);
            onChange(rawValue);
            return;
          }

          const number = function getValidNumber(input) {
            const replacedCommas = String(input)
              .replace(',', '.')
              .replace(/ /g, '');

            return Number(replacedCommas);
          };

          if (Number.isNaN(number)) return;

          setInputValue(rawValue);
          onChange(rawValue);
        }}
        onFocus={() => {
          onFocus();
          setFocused(true);
        }}
        onBlur={() => {
          onBlur();
          setFocused(false);
        }}
      />
    </Wrapper>
  );
}
