import React from 'react';
import { Group, Input, Label } from '../styles/form-input.styles';

const FormInput = ({ label, value, ...otherProps }) => {
  return (
    <Group>
      <Input active={value.length} {...otherProps} />
      {label && <Label shrink={value.length}>{label}</Label>}
    </Group>
  );
};

export default FormInput;
