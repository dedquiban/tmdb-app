import React from 'react';
import { LeftPaneContainer } from '../styles/leftPane.styles';

const LeftPane = ({ children }) => {
  return <LeftPaneContainer>{children}</LeftPaneContainer>;
};

export default LeftPane;
