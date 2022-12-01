import styled, { css } from 'styled-components';
import { SignInBtn } from './button.styles';

const darkGrey = 'rgb(59, 59, 59)';
const primaryGrey = 'grey';
const lightRed = '#ff6865';

const visible = css`
  display: block;
`;

const invisible = css`
  display: none;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  top: 0;
  bottom 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;

  border-radius: 16px;

  box-shadow: -13px 22px 44px 0px rgba(20,20,20,1),inset -45px 17px 88px -97px rgba(228, 163, 0, 1);
  width: 85%;
  max-width: 550px;

  min-height: 550px;
  max-height: 550px;

  background: #0f0f0f;

  overflow-y: scroll;

  h1 {
    margin-bottom: 24px;
  }

`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  align-self: flex-start;

  color: ${primaryGrey};
`;

export const ErrorMessage = styled.p`
  display: block;
  font-size: 12px;
  color: ${lightRed};
  height: 100%;
  width: 100%;
  white-space: break-spaces;

  ${({ touch, error }) => (error && touch ? visible : invisible)}
`;

export const Span = styled.span`
  position: absolute;
  top: 36px;
  left: 196px;
  color: ${lightRed};
  border-radius: 16px;
  margin-left: 16px;
`;

export const Input = styled.input`
  width: 100%;
  margin: 12px 0;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font: inherit;
  color: #fff;
  background-color: ${darkGrey};
  outline: 2px solid ${darkGrey};
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
