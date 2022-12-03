import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const gradientBorder = css`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(to right, #f7b42c, #fc575e) border-box;
  border-radius: 9999px;
  border: 2px solid transparent;
`;

const gradientText = css`
  background: linear-gradient(to left, #fc575e, #f7b42c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const grid = css`
  display: flex;
  background-image: linear-gradient(
    to right bottom,
    #2c272c,
    #31262c,
    #352629,
    #392525,
    #3b2620,
    #3d2820,
    #3f2b1f,
    #402d1f,
    #453123,
    #493428,
    #4e382c,
    #523c31
  );
  height: 100vh;
  overflow-y: scroll;
`;

const scroll = css`
  display: flex;
  background-image: linear-gradient(
    to right bottom,
    #2c272c,
    #31262c,
    #352629,
    #392525,
    #3b2620,
    #3d2820,
    #3f2b1f,
    #402d1f,
    #453123,
    #493428,
    #4e382c,
    #523c31
  );
  min-height: 100vh;
  height: fit-content;
  overflow-x: scroll;
`;

export const MyListContainer = styled.div`
  ${({ value }) => (value === 'grid' ? grid : scroll)};

  @media (max-width: 682px) {
    display: none;
  }
`;

const gridType = css`
  display: flex;
  background: rgba(26, 26, 26, 0.5);
  width: 100%;
  min-height: 526px;
  border-radius: 16px;
  padding: 24px 26px;
  margin: 24px;
`;

const scrollType = css`
  display: flex;
  background: rgba(26, 26, 26, 0.5);
  width: 100%;
  height: fit-content;
  border-radius: 16px;
  margin: 24px;
  padding: 24px 26px;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const Group = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 4px 2px 4px,
    rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  ${({ value }) => (value === 'grid' ? gridType : scrollType)};
`;

//CONTENT--movies of playlist
export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding-left: 32px;
`;

export const ToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;

  color: rgb(87, 87, 87);
  font-size: 16px;
  width: 100%;

  @media (max-width: 682px) {
    padding-bottom: 24px;
  }
`;

const hide = css`
  visibility: hidden;
`;

export const Name = styled.div`
  ${({ value }) => !value && hide}
  display: flex;
  align-items: center;

  transition: 1s ease all;

  width: 75%;

  h3 {
    white-space: nowrap;

    overflow-x: scroll;
    margin-left: 16px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  #left {
    font-size: 12px;
    padding: 8px;
    border-radius: 8px;
    background: rgba(26, 26, 26, 0.3);
    margin-right: 2px;

    transition: 0.3s ease all;
    &:hover {
      color: rgb(160, 160, 160);
      cursor: pointer;
    }
  }

  #right {
    font-size: 12px;
    padding: 8px;
    border-radius: 8px;
    background: rgba(26, 26, 26, 0.3);
    margin-right: 24px;

    transition: 0.3s ease all;
    &:hover {
      color: rgb(160, 160, 160);
      cursor: pointer;
    }
  }

  #scroll {
    padding-right: 12px;
    border-right: 1px solid;

    transition: 0.3s ease all;
    &:hover {
      border-right: 1px solid rgb(87, 87, 87);
      color: rgb(160, 160, 160);
    }
  }

  #grid {
    padding-left: 12px;

    transition: 0.3s ease all;
    &:hover {
      color: rgb(160, 160, 160);
    }
  }

  @media (max-width: 682px) {
    #left,
    #right {
      display: none;
    }
  }
`;

const scrollView = css`
  position: relative;
  display: flex;
  padding-top: 28px;
`;

const gridView = css`
  position: relative;
  overflow-y: hidden;
  padding-top: 26px;
`;
export const Movies = styled.div`
  ${({ value }) => (value === 'grid' ? gridView : scrollView)}
`;

//ADD PLAYLIST MODAL
const popup = css`
  transform: translateY(0);
`;
const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: #1a1a1a;
  width: 100%;

  ${gradientBorder};
`;

const visible = css`
  display: flex;
`;

const invisible = css`
  display: none;
`;

export const Overlay = styled.div`
  transition: 0.6s ease all;
  position: fixed;
  display: none;

  justify-content: center;
  align-items: center;
  background: rgba(26, 26, 26, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  padding: 24px;

  ${({ isActive }) => isActive && visible}
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: rgb(60, 60, 60);
  border: none;
  color: #fff;
  outline: 2px solid rgb(60, 60, 60);
  margin-top: 16px;
  margin-bottom: 16px;
  transition: 0.6s all ease;
`;

export const FaXmark = styled(FontAwesomeIcon)``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: #e22525;
  background: transparent;
  border-radius: 9999px;
  border: 2px solid #e22525;
  padding: 24px;
  width: 32px;
  height: 32px;
  font-family: 'Inter', sans-serif;

  transition: 0.3s width ease;
  ${({ value }) => value && style}

  p {
    ${gradientText}
    font-family: 'Inter', sans-serif;
  }

  ~ ${FaXmark} {
    ${({ value }) => value && invisible};
  }
`;

export const Modal = styled.div`
  transform: translateY(200%);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(24, 24, 24, 1);
  color: #fff;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  width: 420px;
  height: 320px;

  @keyframes popup {
    80% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: 0.3s popup ease;
  ${({ isActive }) => isActive && popup}

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: 0.6s all ease;
  }

  @media (max-width: 480px) {
    max-height: 280px;
  }
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 682px) {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    padding: 24px 24px 84px 24px;

    background: linear-gradient(
      to right bottom,
      #2c272c,
      #31262c,
      #352629,
      #392525,
      #3b2620,
      #3d2820,
      #3f2b1f,
      #402d1f,
      #453123,
      #493428,
      #4e382c,
      #523c31
    );
    // min-height: 100vh;
    // height: fit-content;
    height: 100vh;
    overflow-y: scroll;
  }
`;

export const BottomPane = styled.div`
  display: flex;
  flex-direction: column;
  // height: 60%;
  width: 100%;
  min-height: 240px;

  border-radius: 16px;
  padding: 20px 22px;

  background: rgba(26, 26, 26, 0.5);
  box-shadow: rgba(0, 0, 0, 0.4) 4px 2px 4px,
    rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  @media (max-width: 480px) {
    min-height: 164px;
  }
`;

export const TopPane = styled.div`
  display: flex;
  flex-direction: column;
  // height: 40%;
  width: 100%;
  min-height: 420px;

  border-radius: 16px;

  padding: 0px 4px;

  @media (max-width: 480px) {
    min-height: 356px;
  }
`;

export const CreatePlaylist = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a295f;

  margin: 12px 4px 12px 16px;
  padding: 12px;

  border-radius: 8px;

  background: rgba(26, 26, 26, 0.5);
  box-shadow: rgba(0, 0, 0, 0.4) 4px 2px 4px,
    rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const LikedMoviesBtn = styled(CreatePlaylist)`
  color: #712222;
  margin-left: 6px;
`;

export const MiddlePane = styled.div`
  display: flex;
`;
