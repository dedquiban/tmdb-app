import React from 'react';

import SignupForm from '../signup-form/SignupForm';
import { LeftDiv, RightDiv, SignupContainer } from '../../styles/signup-page.styles';

const SignupPage = () => {
  return (
    <SignupContainer>
      <LeftDiv>
        <h1>Sign Up</h1>
        <SignupForm />
      </LeftDiv>
      <RightDiv />
    </SignupContainer>
  );
};

export default SignupPage;
