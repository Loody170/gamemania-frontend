import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required').min(3, 'Username is too short')
      .max(15, 'Username is too long'),

    email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

    password: Yup.string()
      .min(5, 'password too short!')
      .max(20, 'Password too long')
      .required('Password is required'),

    confirmPassword: Yup.string()
    .required('Password confirm is required')
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  