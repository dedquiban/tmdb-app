import styled, { css } from 'styled-components';

const primaryGold = '#e4a300';
const primaryGrey = 'grey';

const shrinkLabelStyles = css`
  top: 4px;
  font-size: 12px;
  padding: 0 8px;
  background-color: black;
  color: ${primaryGold};
`;

const activeInputStyles = css`
  outline: 2px solid ${primaryGold};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 175px;
  top: 25px;
  font-size: 12px;
  color: ${primaryGrey};

  transition: 100ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  width: 50%;
  margin: 12px 0;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font: inherit;
  color: #fff;
  background-color: transparent;
  outline: 2px solid ${primaryGrey};

  ${({ active }) => active && activeInputStyles}

  &:focus ~ ${Label} {
    ${shrinkLabelStyles}
  }
`;
