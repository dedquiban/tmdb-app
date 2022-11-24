import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserLoadingStatus } from '../store/user/user.slice';
import {
  Icon,
  LoaderContainer,
  LoaderSignup,
  SignupIcon,
} from '../styles/loader.styles';

const Loader = ({ id }) => {
  const userLoadingStatus = useSelector(selectUserLoadingStatus);

  let login = (
    <LoaderContainer value={userLoadingStatus}>
      <Icon value={userLoadingStatus} />
    </LoaderContainer>
  );

  let signup = (
    <LoaderSignup value={userLoadingStatus}>
      <SignupIcon value={userLoadingStatus} />
    </LoaderSignup>
  );
  return (
    <>
      {id === 'login' && login}
      {id === 'signup' && signup}
    </>
  );
};

export default Loader;
