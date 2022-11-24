import { toBeVisible } from '@testing-library/jest-dom/dist/matchers';
import styled, { css } from 'styled-components';

const visible = css`
  display: flex;
`;

export const LoaderContainer = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 26, 0.95);
  z-index: 2;

  width: 100vw;
  height: 100vh;

  ${({ value }) => (value === 'loading' || value === 'succeeded') && visible}
`;
const inlineBlock = css`
  display: inline-block;
`;

export const Icon = styled.div`
  display: none;

  ${({ value }) =>
    (value === 'loading' || value === 'succeeded') && inlineBlock}

  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: grey transparent grey transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderSignup = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  background: #e4a300;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  ${({ value }) =>
    (value === 'loading' || value === 'succeeded' || value === 'idle') &&
    visible}
`;

export const SignupIcon = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  ${({ value }) =>
    (value === 'loading' || value === 'succeeded' || value === 'idle') &&
    visible}

  &:after {
    content: ' ';

    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
