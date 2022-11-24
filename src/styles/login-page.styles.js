import styled from 'styled-components';

const white = 'white';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  align-items: center;

  min-height: 445px;
  min-width: 750px;

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
  width: 25%;

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

  @media (max-width: 445px) {
    width: 75%;
  }
`;

export const OtherAcctsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 24px;
  padding: 12px;
  color: #ffe39c;
`;

export const Divider = styled.div`
  position: absolute;
  bottom: 322px;
  width: 25%;
  border: 0.5px solid rgb(160, 160, 160);
`;

export const Span = styled.span`
  display: flex;

  color: #fff;
  padding: 12px 16px;
  margin-top: 26px;
  background: black;
  z-index: 1;
`;
