import styled, { css } from 'styled-components';

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
  background: linear-gradient(
    to right bottom,
    #c441c4,
    #de379f,
    #e73f7d,
    #e45160,
    #d9654c,
    #d36c46,
    #cc7342,
    #c5793f,
    #c7763f,
    #c8743f,
    #ca713f,
    #cb6e3f
  );
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
  z-index: 100;
  transform: translateY(200%);
  position: fixed;
  flex-direction: column;
  padding: 0 12px 42px 12px;
  height: 100%;
  transition: 0.4s ease all;
  ${({ isOpen }) => isOpen && z};

  background: black;
  box-shadow: 50px 50px 905px 305px black;
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

export const ContentDiv = styled.div`
  flex-direction: column;
  align-items: center;
  height: 93%;
  padding: 8px 0;
  overflow-y: scroll;
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
  color: rgb(87, 87, 87);
  display: none;
  position: absolute;
  flex-direction: column;
  top: calc(100%);
  left: 54px;
  background: transparent;
  border-radius: 8px;
  // width: 210px;
  // height: 40px;

  transition: 0.3s all ease;

  &:hover {
    display: flex;
  }

  div {
    cursor: pointer;
    margin-top: 12px;
    display: flex;
    font-size: 16px;
    color: rgb(87, 87, 87);

    &:hover {
      color: rgb(160, 160, 160);
      transform: translateY(-1px);
    }
  }

  p {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const ProfileDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 150px;
  transition: 0.3s ease all;
  &:hover {
    ${Tooltip} {
      display: flex;
    }
  }

  span {
    ${gradientText};
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    padding: 4px 20px;

    &:hover {
      #tooltip {
        display: block;
      }
    }
  }
`;

export const Profile = styled.div`
  cursor: pointer;
  height: 24px;
  width: 24px;
  margin: 10px 0 10px 8px;
  ${gradientBorder};
`;
