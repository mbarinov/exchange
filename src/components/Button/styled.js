import styled from 'styled-components';

export const StyledButton = styled.div`
  display: inline-block;
  border-radius: 2em;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  padding: 0.625em 1.5em;
  line-height: 1.5em;
  font-size: 1rem;
  background-color: rgb(235, 0, 141);

  color: white;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
