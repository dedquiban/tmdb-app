import styled from 'styled-components';
import bg from '../../assets/cinema-signup-page.png';

export const SignupContainer = styled.div`
  display: flex;
  height: 100vh;
  background: black;
`;

export const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 50%;

  h1 {
    margin-bottom: 24px;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 100%;
  width: 50%;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;
