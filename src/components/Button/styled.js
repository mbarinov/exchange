import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: red;

  &[disabled] {
    background-color: #09d3ac;
    cursor: not-allowed;
  }
`;
