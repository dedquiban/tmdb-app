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

// ToggleMenuButton

const rotate = css`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
`;

const black = css`
  background: black;
`;

export const Icon = styled.img``;

export const ToggleMenuButton = styled.div`
  position: fixed;
  bottom: 6px;
  left: 6px;
  padding: 14px 12px 12px 12px;
  border-radius: 50%;
  background: #1a1a1a;
  opacity: 0.95;
  width: 50px;
  height: 50px;

  z-index: 100;

  transition: 0.3s ease all;
  ${({ isOpen }) => isOpen && black}

  ${Icon} {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s ease all;
    ${({ isOpen }) => isOpen && rotate}
  }
`;
