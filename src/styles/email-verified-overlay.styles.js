import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const popup = css`
  transform: translateY(0);
`;

const visible = css`
  display: flex;
`;
const invisible = css`
  display: none;
`;

// export const Spinner = styled(FontAwesomeIcon)`
//   transform: scale(1.1);
//   display: none;
//   position: absolute;
//   top: 10px;
//   left: 10px;

//   ${({ isLoaded }) => isLoaded && visible}
// `;

export const Message = styled.div`
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
  //   width: 420px;
  //   height: 320px;

  padding: 48px;

  span {
    background: linear-gradient(
      to right top,
      #d16ba5,
      #c777b9,
      #ba83ca,
      #aa8fd8,
      #9a9ae1,
      #8aa7ec,
      #79b3f4,
      #69bff8,
      #52cffe,
      #41dfff,
      #46eefa,
      #5ffbf1
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    position: relative;
    background: linear-gradient(
          to right top,
          #d16ba5,
          #c777b9,
          #ba83ca,
          #aa8fd8,
          #9a9ae1,
          #8aa7ec,
          #79b3f4,
          #69bff8,
          #52cffe,
          #41dfff,
          #46eefa,
          #5ffbf1
        )
        padding-box,
      linear-gradient(
          to right top,
          #d16ba5,
          #c777b9,
          #ba83ca,
          #aa8fd8,
          #9a9ae1,
          #8aa7ec,
          #79b3f4,
          #69bff8,
          #52cffe,
          #41dfff,
          #46eefa,
          #5ffbf1
        )
        border-box;
    border-radius: 9999px;
    border: 2px solid transparent;

    margin-top: 24px;
    padding: 16px 24px;
    cursor: pointer;
  }

  p {
    display: block;
    font-size: 16px;
    line-height: 24px;

    font-weight: bold;
    color: #1a1a1a;

    transition: 0.6s all ease;
  }

  @keyframes popup {
    80% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: 0.3s popup ease;
`;

export const EmailVerifiedOverlayContainer = styled.div`
  display: none;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 26, 0.5);
  z-index: 100;

  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  ${({ isEmailOverlayActive }) => isEmailOverlayActive && visible};

  ${Message} {
    ${({ isEmailOverlayActive }) => isEmailOverlayActive && popup};
  }
`;
