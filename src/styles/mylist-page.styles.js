import styled, { css } from 'styled-components';

const gradientBorder = css`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(to right, #f7b42c, #fc575e) border-box;
  border-radius: 8px;
  border: 1px solid transparent;
`;

const gradientText = css`
  background: -webkit-radial-gradient(#fc575e, #f7b42c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MyListContainer = styled.div`
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
`;

export const Group = styled.div`
  display: flex;
  background: rgba(26, 26, 26, 0.5);
  width: 100%;
  // height: fit-content;
  height: 460px;

  border-radius: 16px;
  margin: 24px;
  padding: 24px 26px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

//PLAYLISTS
export const PlaylistsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding-top: 5px;
`;

export const IconDiv = styled.div`
  display: flex;
  color: rgb(87, 87, 87);
  font-size: 16px;
  width: 100%;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
    color: rgb(160, 160, 160);
  }

  p {
    margin-left: 12px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;
  }

  transition: 0.3s ease all;
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
`;

const hide = css`
  visibility: hidden;
`;

export const Choices = styled.div`
  padding: 8px 20px;
  display: none;
  flex-direction: column;
  position: absolute;
  top: 2px;
  left: calc(100%);
  background: rgba(26, 26, 26, 0.75);
  border-radius: 8px;

  &:hover {
    display: flex;
    z-index: 99;
  }

  div {
    padding: 8px 0;
    cursor: pointer;
    display: flex;
    color: rgb(87, 87, 87);
    padding-bottom: 10px;
    font-size: 12px;
    font-family: 'Inter', sans-serif;

    p {
      margin-left: 8px;
    }
  }

  #delete {
    &:hover {
      color: red;
    }
  }

  #edit {
    &:hover {
      color: rgb(160, 160, 160);
    }
  }

  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const Name = styled.div`
  position: relative;

  ${({ value }) => !value && hide}
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 1s ease all;

  h3 {
    margin-left: 16px;
  }

  #choices {
    display: none;
  }

  &:hover {
    #choices {
      display: block;
      margin-left: 16px;
      cursor: pointer;
      color: rgb(87, 87, 87);
      padding-right: 20px;

      &:hover {
        color: rgb(160, 160, 160);

        ~ ${Choices} {
          display: flex;
          z-index: 99;
        }
      }
    }
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
`;

export const Movies = styled.div`
  position: relative;
  display: flex;
  padding-top: 28px;
  position: relative;
`;

//ADD PLAYLIST MODAL
const popup = css`
  transition: 0.3s all ease;
  display: flex;
  transform: translateY(0);
`;
const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  font-size: 14px;
  color: #1a1a1a;
  width: 100%;
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
  // transform: translateY(200%);
  display: none;

  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;

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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${gradientBorder}
  border-radius: 9999px;
  padding: 12px 20px;
  width: 38px;
  font-family: 'Inter', sans-serif;

  transition: 0.3s width ease;

  p {
    ${gradientText}
    font-family: 'Inter', sans-serif;
  }

  ${({ value }) => value && style}

  #xmark {
    ${gradientText}
    ${({ value }) => value && invisible};
  }
`;

export const Modal = styled.div`
  transform: translateY(200%);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  // display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  color: #fff;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  width: 420px;
  height: 320px;

  transition: 0.6s all ease;
  ${({ isActive }) => isActive && popup}

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: 0.6s all ease;
  }
`;
