import React from 'react';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import SignupForm from '../signup-form/SignupForm';
import {
  BackBtn,
  LeftDiv,
  RightDiv,
  SignupContainer,
} from '../../styles/signup-page.styles';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <SignupContainer>
      <LeftDiv>
        <h1>Sign Up</h1>
        <BackBtn icon={faArrowLeftLong} onClick={() => navigate('/')} />
        <SignupForm />
      </LeftDiv>
      <RightDiv />
    </SignupContainer>
  );
};

export default SignupPage;
