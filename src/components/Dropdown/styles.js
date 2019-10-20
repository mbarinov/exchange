import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  margin-top: 2px;
  border-radius: 8px;
  border: 1px solid #dedede;
  background-color: white;
  width: ${props => `${props.width}px`};

  z-index: 100;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #dedede;
`;
