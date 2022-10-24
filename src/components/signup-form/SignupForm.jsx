import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

import Button from '../Button';

import {
  Form,
  Group,
  Input,
  Label,
  Div,
  ErrorMessage,
} from '../../styles/signup-form.styles';

const SignupForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  const init = {
    email: '',
    password: {
      empty: '',
      min: '',
      upper: '',
      number: '',
      char: '',
    },
    confirmPassword: '',
  };

  const initial = {
    email: null,
    password: null,
    confirmPassword: null,
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState(init);

  const [touched, setTouched] = useState(initial);

  //const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFormValues = { ...formValues, [name]: value };
    setFormValues(newFormValues);
    console.log('newFormValues', newFormValues);

    const newFormErrors = {
      ...validate(newFormValues, formErrors),
      [name]: validate(newFormValues, formErrors)[name],
    };
    setFormErrors(newFormErrors);

    console.log('newFormErrors', newFormErrors);
  };

  const handleTouch = (e) => {
    const { name } = e.target;

    const newTouched = { ...touched, [name]: true };
    setTouched(newTouched);

    console.log('newTouched', newTouched);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, confirmPassword } = formErrors;
    const { empty, min, upper, number, char } = formErrors.password;

    if (
      !email &&
      !confirmPassword &&
      !empty &&
      !min &&
      !upper &&
      !number &&
      !char
    ) {
      try {
        const { user } = await createAuthUserFromEmailAndPassword(
          formValues.email,
          formValues.password
        );

        const response = await createUserDocumentFromAuth(user);
        console.log(response);
        navigate('/home');
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email is already in use');
            break;
          default:
            break;
        }
      }
    } else {
      console.log('error');
    }
  };

  const validate = (values, errors) => {
    //const errors = {};
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    const isUpperCase = /(.*[A-Z].*)/;
    const hasNum = /[0-9]/;
    const hasChar = /(.*\W.*)/;

    //EMAIL
    if (!values.email) {
      errors = { ...errors, email: 'Email is required!' };
    } else if (!regex.test(values.email)) {
      errors = { ...errors, email: 'This is not a valid email!' };
    } else {
      errors = { ...errors, email: '' };
    }

    //CONFIRM PASSWORD
    if (!values.confirmPassword) {
      errors = { ...errors, confirmPassword: 'Please confirm password!' };
    } else if (values.confirmPassword !== values.password) {
      errors = { ...errors, confirmPassword: 'Passwords do not match!' };
    } else {
      errors = { ...errors, confirmPassword: '' };
    }

    //PASSWORD
    if (!values.password) {
      errors = {
        ...errors,
        password: { empty: 'Password is required!\n' },
      };
    } else {
      errors = {
        ...errors,
        password: { empty: '' },
      };

      if (values.password.length < 8) {
        errors = {
          ...errors,
          password: {
            ...errors.password,
            min: 'At least 8 characters is required!\n',
          },
        };
      } else {
        errors = {
          ...errors,
          password: {
            ...errors.password,
            min: '',
          },
        };
      }
      if (!isUpperCase.test(values.password)) {
        errors = {
          ...errors,
          password: {
            ...errors.password,
            upper: 'One uppercase letter is required!\n',
          },
        };
      } else {
        errors = {
          ...errors,
          password: {
            ...errors.password,
            upper: '',
          },
        };
      }

      if (!hasNum.test(values.password)) {
        errors = {
          ...errors,
          password: {
            ...errors.password,
            number: 'One number is required!\n',
          },
        };
      } else {
        errors = {
          ...errors,
          password: {
            ...errors.password,
            number: '',
          },
        };
      }

      if (!hasChar.test(values.password)) {
        errors = {
          ...errors,
          password: {
            ...errors.password,
            char: 'One special character is required!\n',
          },
        };
      } else {
        errors = {
          ...errors,
          password: {
            ...errors.password,
            char: '',
          },
        };
      }
    }
    return errors;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Group>
        <Div>
          <Label>Email</Label>
          <Input
            required
            type='email'
            value={formValues.email}
            name='email'
            onInput={handleChange}
            onChange={handleTouch}
          />
          <ErrorMessage error={formErrors.email} touch={touched.email}>
            {formErrors.email}
          </ErrorMessage>
        </Div>
      </Group>

      <Group>
        <Div>
          <Label>Password</Label>
          <Input
            required
            type='password'
            value={formValues.password}
            name='password'
            onInput={handleChange}
            onChange={handleTouch}
          />
          {Object.values(formErrors.password).map((value, index) => (
            <ErrorMessage key={index} error={value} touch={touched.password}>
              {value}
            </ErrorMessage>
          ))}
        </Div>
      </Group>

      <Group>
        <Div>
          <Label>Confirm Password</Label>
          <Input
            required
            type='password'
            value={formValues.confirmPassword}
            name='confirmPassword'
            onInput={handleChange}
            onChange={handleTouch}
          />
          <ErrorMessage
            error={formErrors.confirmPassword}
            touch={touched.confirmPassword}
          >
            {formErrors.confirmPassword}
          </ErrorMessage>
        </Div>
      </Group>

      <Button type='submit'>Sign Up</Button>
    </Form>
  );
};

export default SignupForm;
