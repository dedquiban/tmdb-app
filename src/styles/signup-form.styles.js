import styled, { css } from 'styled-components';

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
  flex-direction: column;
  width: 50%;
  position: relative;
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

const paddingRight = css`
  margin-right: 42px;
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
