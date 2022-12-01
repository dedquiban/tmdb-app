import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const enableLogin = css`
  color: rgba(0, 0, 0, 1);
  background: #426cba;

  animation: 0.6s scaleLoginBtn ease;
`;
export const BaseButton = styled.button`
  border-radius: 9999px;
  background: rgba(86, 115, 169, 0.5);
  font-weight: bold;
  color: rgba(86, 115, 169, 0);
  width: 100%;
  padding: 18px 12px;
  margin: 12px 0;
  border: 2px solid #5673a9;

  transition: 0.3s all ease;

  @keyframes scaleLoginBtn {
    55% {
      transform: scaleX(1.05);
    }
    100% {
      width: 100%;
    }
  }

  ${({ value }) => value && enableLogin}

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
    transition: all 100ms ease;
  }
`;
const invisible = css`
  display: none;
`;

export const SignInBtn = styled.button`
  border-radius: 9999px;
  font-weight: bold;
  color: rgba(86, 115, 169, 0);
  padding: 18px 12px;
  background: rgba(228, 163, 0, 1);
  border: 2px solid #e4a300;

  transition: 0.3s all ease;

  background: rgba(228, 163, 0, 1);
  border: 2px solid #e4a300;
  margin-top: 8px;
  max-width: 220px;
  width: 100%;

  p {
    color: black;

    ${({ value }) =>
      (value === 'loading' || value === 'succeeded' || value === 'idle') &&
      invisible}
  }
`;

export const GoogleSigninButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  img {
    margin-right: 16px;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid #8b6f94;
    color: #8b6f94;
  }
`;

// MenuButton
const openStyles = css`
  background: black;
  .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
`;
export const MenuButton = styled.button`
  position: fixed;
  bottom: 6px;
  left: 6px;
  padding: 14px 12px 12px 12px;
  border-radius: 50%;
  border: none;
  background: #1a1a1a;
  opacity: 0.95;

  cursor: pointer;
  z-index: 100;

  .line {
    fill: none;
    stroke: rgb(87, 87, 87);
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  ${({ isOpen }) => isOpen && openStyles}

  @media (max-width: 480px) {
    width: %;
    border-radius: 4px;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 4px 0px;
    margin: 0px 4px 2px 4px;

    background: #1a1a1a;

    .svg {
      display: none;
    }

    .line {
      display: none;
    }
  }
`;
