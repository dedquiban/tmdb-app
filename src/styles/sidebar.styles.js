import styled, { css } from 'styled-components';

//const linear = 'linear-gradient(#ffa80f, #fe8116)';
//const radial = 'radial-gradient(#ffa80f, #fe8116)';

const visible = css`
  display: flex;
`;

const z = css`
  display: flex;
  z-index: 100;
  transition: 0.4s ease all;
  transform: translateY(0);
`;

const gradientText = css`
  background: -webkit-radial-gradient(#fc575e, #f7b42c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const gradientBorder = css`
  background: linear-gradient(black, black) padding-box,
    linear-gradient(to right, #fc575e, #f7b42c) border-box;
  border-radius: 8px;
  border: 1px solid transparent;
`;

export const SidebarContainer = styled.div`
  transform: translateY(150%);
  position: fixed;
  flex-direction: column;
  margin: 4px;
  height: 100%;
  width: 200px;

  transition: 0.4s ease all;
  ${({ isOpen }) => isOpen && z};
`;

export const Overlay = styled.div`
  position: fixed;
  display: none;
  background: #1a1a1a;
  opacity: 0.25;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  ${({ isOpen }) => isOpen && visible};
`;

export const UpperDiv = styled.div`
  //transform: translateY(150%);
  flex-direction: column;
  align-items: center;
  height: 93%;
  padding: 8px;

  background: black;
  border-radius: 8px;
  box-shadow: 50px 50px 905px 305px black;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  padding: 12px;
  color: rgb(87, 87, 87);

  transition: 0.3s ease all;

  &:hover {
    color: rgb(160, 160, 160);
    transform: translateY(-1px);
  }

  h3 {
    margin-left: 20px;
    white-space: nowrap;
  }
`;

export const Tooltip = styled.div`
  position: fixed;
  display: none;
  flex-direction: column;
  top: 190px;
  left: 38px;
  background: transparent;
  border-radius: 8px;
  width: 300px;
  height: 140px;

  &:hover {
    display: flex;
  }

  span {
    ${gradientText};
    font-weight: bold;
    font-size: 14px;
    margin-left: 18px;
  }

  p {
    cursor: pointer;
    margin-left: 18px;
    margin-top: 12px;
    font-size: 12px;
    color: rgb(87, 87, 87);
  }
`;

export const ProfileDiv = styled.div`
  cursor: pointer;
  height: 22px;
  width: 22px;
  margin: 8px;
  ${gradientBorder};

  &:hover ~ ${Tooltip} {
    display: flex;
  }
`;
