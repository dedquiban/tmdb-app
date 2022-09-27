import * as yup from 'yup';

const pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('Required')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(pwRegex, 'Please enter a valid password'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
