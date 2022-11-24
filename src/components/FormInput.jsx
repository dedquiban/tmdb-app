import React from 'react';
import { Group, Input, Label } from '../styles/form-input.styles';
import TogglePassword from './TogglePassword';
import SignupTogglePassword from './SignupTogglePassword';

const FormInput = ({ label, value, ...otherProps }) => {
  return (
    <Group>
      <Input active={value.length} {...otherProps} />
      {otherProps?.name === 'password' && <TogglePassword />}
      {otherProps?.name === 'password' &&
        otherProps?.id === 'signupPwInput' && (
          <SignupTogglePassword id='signupPwToggle' />
        )}
      {otherProps?.name === 'confirmPassword' && (
        <SignupTogglePassword id='confirmPwToggle' />
      )}
      {label && <Label shrink={value.length}>{label}</Label>}
    </Group>
  );
};

export default FormInput;
