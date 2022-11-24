import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import {
  FaEye,
  FaEyeSlash,
  TogglePasswordContainer,
} from '../styles/signup-toggle-password.styles';
import { useEffect } from 'react';

const SignupTogglePassword = ({ id }) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setShowPassword(!showPassword);
  }, [setShowPassword]);

  const togglePwVisibility = () => {
    setShowPassword(!showPassword);

    const signupPwInput = document.getElementById('signupPwInput');

    const confirmPwInput = document.getElementById('confirmPwInput');

    if (showPassword && id === 'signupPwToggle') {
      signupPwInput.type = 'text';
    } else if (!showPassword && id === 'signupPwToggle') {
      signupPwInput.type = 'password';
    }

    if (showPassword && id === 'confirmPwToggle') {
      confirmPwInput.type = 'text';
    } else if (!showPassword && id === 'confirmPwToggle') {
      confirmPwInput.type = 'password';
    }
  };

  return (
    <TogglePasswordContainer>
      {showPassword ? (
        <FaEye icon={faEye} onClick={() => togglePwVisibility()} />
      ) : (
        <FaEyeSlash icon={faEyeSlash} onClick={() => togglePwVisibility()} />
      )}
    </TogglePasswordContainer>
  );
};

export default SignupTogglePassword;
