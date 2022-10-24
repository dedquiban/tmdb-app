import styled, { css } from 'styled-components';

const primaryGold = '#e4a300';

export const BaseButton = styled.button`
  border-radius: 4px;
  background-color: ${primaryGold};
  font-weight: bold;
  color: #0c0c0c;
  width: 50%;
  padding: 12px;
  margin: 12px 0;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
    transition: all 100ms ease;
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
  width: 50%;
  img {
    margin-right: 16px;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${primaryGold};
    color: ${primaryGold};
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
`;
