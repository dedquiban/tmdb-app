import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  auth,
  db,
  signInAuthUserFromEmailAndPassword,
  signInWithGoogleRedirect,
  createLikedMoviesDoc,
  sendUserPasswordResetEmail,
  signOutUser,
} from '../../utils/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import google from '../../assets/google.png';
import FormInput from '../FormInput';
import {
  LoginContainer,
  Form,
  OtherAcctsContainer,
  Divider,
  Span,
  SignUp,
} from '../../styles/login-page.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';
import { CREATE_LIKED_MOVIES_PLAYLIST } from '../../store/movies/movies.slice';
import {
  selectUser,
  SET_LOGOUT_STATE,
  SET_USER_STATUS,
} from '../../store/user/user.slice';
import Loader from '../Loader';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    let response;

    async function getResult() {
      response = await getRedirectResult(auth);
      console.log('getRedirectResult response', response);

      if (!response) {
        dispatch(SET_USER_STATUS());
        console.log('No google user to redirect');
      } else {
        const userDocRef = doc(db, 'users', response.user.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (!userSnapshot.exists()) {
          const { displayName, email } = response.user;
          const createdAt = new Date();

          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
          });

          const newLikedMoviesPlaylist = await createLikedMoviesDoc(
            response.user
          );
          console.log('newLikedMoviesPlaylist', newLikedMoviesPlaylist);

          dispatch(
            CREATE_LIKED_MOVIES_PLAYLIST({
              currentUser,
              newLikedMoviesPlaylist,
            })
          );
        }

        navigate('/home');
      }
    }
    getResult();
    // eslint-disable-next-line
  }, []);

  const handleSignInWithGoogleRedirect = async (e) => {
    console.log('clicked handleSignInWithGoogleRedirect');
    try {
      await signInWithGoogleRedirect();
    } catch (error) {
      switch (error.code) {
        case 'auth/internal-error':
          alert('Network is unstable');
          break;
        case 'auth/network-request-failed':
          alert('Network is unstable');
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserFromEmailAndPassword(
        email,
        password
      );
      console.log(user);
      resetFormFields();

      navigate('/home');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Invalid email or password');
          break;
        case 'auth/user-not-found':
          alert('Invalid email or password');
          break;
        case 'auth/internal-error':
          alert('Network is unstable');
          break;
        case 'auth/network-request-failed':
          alert('Network is unstable');
        default:
          alert('user sign in failed');
          console.log('user sign in failed', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handlePwReset = async () => {
    try {
      await sendUserPasswordResetEmail(auth, formFields.email);
      toast('Confirmation email has been sent to reset password');
    } catch (error) {
      switch (error.code) {
        case 'auth/too-many-requests':
          error.code = error.code;
        default:
          error.code = error.code;
      }
      toast(error.code);
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />
        <FormInput
          id='pwInput'
          label='Password'
          type='password'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />
        <Button
          type={
            formFields.email.length && formFields.password.length
              ? 'submit'
              : 'button'
          }
          value={formFields.email.length && formFields.password.length}
        >
          Login
        </Button>
        <p onClick={() => handlePwReset()}>Forgot Password?</p>
      </Form>
      <p>
        Do you have an account?{' '}
        <SignUp onClick={() => navigate('/signup')}>Sign Up</SignUp>
      </p>

      <Divider />
      <Span>or</Span>

      <OtherAcctsContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.google}
          onClick={() => handleSignInWithGoogleRedirect()}
        >
          <img src={google} alt='google' />
          Sign In With Google
        </Button>
      </OtherAcctsContainer>
      <Loader id='login' />
    </LoginContainer>
  );
};

export default LoginPage;
