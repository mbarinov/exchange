import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 64px;
  transition: 0.2s;
  cursor: text;

  border-radius: 8px;
  background-color: #dedede;
`;

export const Placeholder = styled.small`
  position: absolute;
  color: #9299a2;
  margin-top: 4px;
  margin-left: 24px;
  transition: 0.2s;
  font-size: 12px;

  &.empty {
    margin-top: 17px;
    font-size: 20px;
  }
`;

export const StyledInput = styled.input`
  height: 64px;
  background-color: transparent;
  border: none;
  margin: 0 24px;
  font-size: 20px;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Error = styled.small``;
