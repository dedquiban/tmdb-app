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
  background-image: linear-gradient(
    to right bottom,
    #ff6e6e,
    #ff718b,
    #fd78a6,
    #f382bf,
    #e58ed4,
    #d692db,
    #c796e1,
    #b79ae4,
    #a797df,
    #9793d9,
    #8890d2,
    #798ccb
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const gradientBorder = css`
  background: linear-gradient(black, black) padding-box,
    linear-gradient(to right, #ff6e6e, #798ccb) border-box;
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
  padding: 12px 24px;
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

export const Password = styled.div`
  font-weight: bold;
  cursor: pointer;
  padding: 12px 18px;
  display: flex;
  font-size: 16px;
  color: #d9d0d0;
  background-image: linear-gradient(
    to left top,
    #1a1a1a,
    #1f1f20,
    #252526,
    #2a2a2d,
    #2f3033,
    #323338,
    #35363c,
    #383941,
    #3b3a44,
    #403a47,
    #463949,
    #4c3949
  );

  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;

  font-size: 12px;

  transition: 0.6s all ease;
  &:hover {
    transform: scale(1.1);
  }

  p {
    margin-left: 18px;
  }
`;

export const SignOut = styled(Password)``;

export const Tooltip = styled.div`
  color: rgb(87, 87, 87);
  display: none;
  position: absolute;
  flex-direction: column;
  top: calc(100%);
  left: 8px;
  // background: rgba(26, 26, 26, 1);

  // background-image: linear-gradient(
  //   to right top,
  //   #413a44,
  //   #443b47,
  //   #463c4b,
  //   #493d4e,
  //   #4c3e52
  // );
  // opacity: 0.8;

  border-radius: 8px;
  width: 91%;

  padding: 12px;
  transition: 0.3s all ease;

  &:hover {
    display: flex;
  }
`;

export const ProfileDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 22px;
  padding-bottom: 18px;

  min-width: 150px;
  transition: 0.3s all ease;
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
    padding: 0px 16px;

    &:hover {
      #tooltip {
        display: block;
      }
    }
  }
`;

export const Profile = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  ${gradientBorder};
`;
