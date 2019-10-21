import styled from 'styled-components';
import { GoArrowBoth } from 'react-icons/go';

export const AccountsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

export const Title = styled.div`
  margin-left: 8px;
`;

export const Controls = styled(GoArrowBoth)`
  display: flex;
  align-self: center;
  justify-self: center;

  cursor: pointer;
`;

export const AmountsWrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-column-gap: 56px;
  grid-row-gap: 8px;

  margin-top: 40px;
`;

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 28px;
`;

export const RateHint = styled.small`
  color: #9299a2;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 40px;
`;
