import React from 'react';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import SignupForm from '../components/SignupForm/SignupForm';
import {
  BackBtn,
  LeftDiv,
  RightDiv,
  SignupContainer,
} from '../styles/signup-page.styles';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <SignupContainer>
      <LeftDiv>
        <BackBtn icon={faArrowLeftLong} onClick={() => navigate('/')} />
      </LeftDiv>
      <RightDiv />
      <SignupForm />
    </SignupContainer>
  );
};

export default SignupPage;
