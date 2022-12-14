import styled from 'styled-components';

const white = 'white';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  align-items: center;
  padding: 36px 40px;

  min-height: 100vh;
  height: fit-content;

  overflow-y: scroll;

  p,
  h2 {
    color: ${white};
  }
`;

export const SignUp = styled.span`
  cursor: pointer;
  color: #426cba;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  width: 100%;

  padding: 32px 48px;
  border-radius: 16px;
  background: #0f0f0f;
  margin-bottom: 16px;

  box-shadow: rgba(80, 80, 80, 0.4) 0px 30px 60px -30px,
    rgba(40, 97, 124, 0.5) 0px -2px 6px 0px inset;

  h2 {
    margin-bottom: 8px;
  }

  p {
    cursor: pointer;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const OtherAcctsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  padding: 12px;
  color: #ffe39c;

  max-width: 550px;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 48px 0px 16px 0px;
  width: 100%;

  max-width: 550px;
`;

export const Divider = styled.div`
  border: 0.5px solid rgb(160, 160, 160);
  width: 100%;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  color: #fff;
  background: black;

  padding: 12px;
  z-index: 1;
`;
