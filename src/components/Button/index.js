import React from 'react';
import { node, func, bool } from 'prop-types';
import { StyledButton } from './styled';

export function Button({ children, onClick, disabled }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
  disabled: bool,
};

Button.defaultProps = {
  disabled: false,
};
