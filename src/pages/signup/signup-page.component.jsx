import React from 'react';

import SignupForm from '../../components/signup-form/signup-form.component';
import { LeftDiv, RightDiv, SignupContainer } from './signup-page.styles';

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
