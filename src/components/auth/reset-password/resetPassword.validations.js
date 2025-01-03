import * as Yup from 'yup';

const initialValues = {
  password: '',
  password_confirmation: ''
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Please enter password')
    .min(6, 'Enter at least 6 characters'),
  password_confirmation: Yup.string()
    .required('Please enter confirm password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export { initialValues, validationSchema };
