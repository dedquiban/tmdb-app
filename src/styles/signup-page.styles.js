import styled from 'styled-components';
import bg from '../assets/cinema-signup-page.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SignupContainer = styled.div`
  display: flex;
  height: 100vh;
  background: black;

  position: relative;

  height: 100vh;
  overflow-y: scroll;
`;

export const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 50%;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BackBtn = styled(FontAwesomeIcon)`
  position: absolute;
  top: 4px;
  left: 8px;
  color: white;
  font-size: 24px;
  padding: 12px;

  &:hover {
    cursor: pointer;
    color: #e4a300;
  }
`;
