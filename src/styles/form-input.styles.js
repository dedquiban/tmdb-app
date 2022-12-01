import styled, { css } from 'styled-components';

const primaryGrey = 'grey';

const shrinkLabelStyles = css`
  top: 4px;
  font-size: 12px;
  padding: 0 8px;
  background-color: #0f0f0f;
  color: white;
`;

const activeInputStyles = css`
  outline: 2px solid white;
`;

const width = css`
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 25px;
  font-size: 12px;
  color: ${primaryGrey};

  transition: 100ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  width: 100%;
  margin: 12px 0;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font: inherit;
  color: #fff;
  background-color: transparent;
  outline: 2px solid ${primaryGrey};

  padding-right: 44px;

  ${({ active }) => active && activeInputStyles}

  &:focus {
    ${Label} {
      ${({ active }) => active && shrinkLabelStyles}
    }
  }
`;
