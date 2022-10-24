import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  db,
  auth,
  signInAuthUserFromEmailAndPassword,
  signInWithGoogleRedirect,
} from '../../utils/firebase.utils';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getRedirectResult } from 'firebase/auth';
import google from '../../assets/google.png';
import FormInput from '../FormInput';
import {
  LoginContainer,
  Form,
  OtherAcctsContainer,
} from '../../styles/login-page.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    let response;
    async function getResult() {
      response = await getRedirectResult(auth);
      const userDocRef = doc(db, 'users', response.user.uid);
      const userSnapshot = await getDoc(userDocRef);
      if (!response) {
        console.log('No google user to redirect');
      } else {
        console.log('response', response);
        navigate('/home');
      }
      if (!userSnapshot.exists()) {
        const { displayName, email } = response.user;
        const createdAt = new Date();
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
      return userDocRef;
    }
    getResult();
    // eslint-disable-next-line
  }, []);

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
        default:
          console.log('user sign in failed', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <LoginContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />
        <Button type='submit'>Login</Button>
      </Form>
      <p>
        Do you have an account?{' '}
        <span onClick={() => navigate('/signup')}>Sign Up</span>
      </p>

      <OtherAcctsContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.google}
          onClick={signInWithGoogleRedirect}
        >
          <img src={google} alt='google' />
          Sign In With Google
        </Button>
      </OtherAcctsContainer>
    </LoginContainer>
  );
};

export default LoginPage;
