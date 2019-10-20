import styled, { css } from 'styled-components';

const commonWrapper = css`
  align-items: center;

  height: 80px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  ${commonWrapper};

  display: grid;
  grid-template-columns: 1fr 48px;
  grid-template-areas: 'account controls';

  border-radius: 8px;
  background-color: #dedede;
`;

export const AccountWrapper = styled.div`
  ${commonWrapper};

  grid-area: account;
  display: flex;

  padding-left: 24px;
  ${props => {
    return props.isActive && 'background: #e6f7ff';
  }}
`;

export const SelectAccount = styled.div`
  padding: 0 32px;
`;

export const Info = styled.div`
  font-size: 28px;
`;

export const Controls = styled.div`
  grid-area: controls;

  display: flex;
  justify-content: center;

  font-size: 32px;
  margin-top: 4px;
`;

export const Trifle = styled.span`
  opacity: 0.6;
`;
