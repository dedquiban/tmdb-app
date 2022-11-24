import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import {
  FaEye,
  FaEyeSlash,
  TogglePasswordContainer,
} from '../styles/toggle-password.styles';
import { useEffect } from 'react';

const TogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setShowPassword(!showPassword);
  }, [setShowPassword]);

  const togglePwVisibility = () => {
    setShowPassword(!showPassword);

    const pwInput = document.getElementById('pwInput');

    if (showPassword) {
      pwInput.type = 'text';
    } else if (!showPassword) {
      pwInput.type = 'password';
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

export default TogglePassword;
