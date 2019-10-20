import React from 'react';
import { StyledButton } from './styled';

export function Button({ children, onClick, disabled }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
