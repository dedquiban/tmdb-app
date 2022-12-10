import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  ${({ active }) => active && visible}// @media (max-width: 682px) {
  //   display: flex;
  // }
`;

//MODAL
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
  ${({ active }) => active && popup}

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

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: #1a1a1a;
  width: 100%;

  ${gradientBorder};
`;

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
