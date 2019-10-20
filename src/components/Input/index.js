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
        data-testid="placeholder"
        onClick={() => {
          inputRef.current.focus();
        }}
        className={!isFocused && inputValue === '' ? 'empty' : ''}
      >
        {placeholder}
      </Placeholder>
      <StyledInput
        data-testid="input"
        ref={inputRef}
        value={inputValue}
        onChange={e => {
          const rawValue = e.target.value;

          if (rawValue === '') {
            setInputValue(rawValue);
            onChange(rawValue);
            return;
          }

          if (Number.isNaN(Number(rawValue))) return;

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
