import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Group = styled.div`
  display: none;
  position: absolute;
  top: -1px;
  left: calc(100%);

  &:hover {
    display: flex;
    z-index: 99;
  }
`;

export const Ellipsis = styled(FontAwesomeIcon)`
  display: flex;
  align-itens: center;
  justify-content: center;
  margin-left: 4px;

  cursor: pointer;
  color: rgb(87, 87, 87);
  padding: 2px 6px;
  position: relative;

  &:hover {
    border-radius: 4px;
    background: rgba(26, 26, 26, 1);
  }
`;

export const Choices = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(26, 26, 26, 1);
  border-radius: 4px;
  margin-left: 4px;
  // border: 0.5px solid rgb(36, 36, 36);

  & div:first-child {
    border-bottom: 0.5px solid rgb(36, 36, 36);
    border-radius: 4px 4px 0 0;
  }

  & div:last-child {
    border-radius: 0 0 4px 4px;
  }

  #delete {
    &:hover {
      color: red;
    }
  }

  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
export const CurrentPlaylistMenuContainer = styled.div`
  display: flex;
  position: relative;

  ${Ellipsis} {
    &:hover {
      ~ ${Group} {
        display: flex;
        z-index: 99;
      }
    }
  }
`;

export const Rename = styled.div`
  cursor: pointer;
  display: flex;
  color: rgb(87, 87, 87);
  font-size: 12px;
  font-family: 'Inter', sans-serif;

  padding: 10px 24px 10px 12px;

  &:hover {
    background: rgb(36, 36, 36);
    color: rgb(160, 160, 160);
  }

  p {
    margin-left: 8px;
  }
`;

export const Delete = styled(Rename)`
  &:hover {
    color: red;
  }

  #faTrash {
    margin-right: 2px;
  }
`;

const visible = css`
  display: flex;
`;

const invisible = css`
  display: none;
`;

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

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: #1a1a1a;
  width: 100%;

  ${gradientBorder};
`;

const popup = css`
  transform: translateY(0);
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
