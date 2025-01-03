import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter name')
    .min(3, 'Enter at least 3 characters'),
  email: Yup.string()
    .required('Please enter email address')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Please enter password')
    .min(6, 'Enter at least 6 characters'),
  password_confirmation: Yup.string()
    .required('Please enter confirm password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export { initialValues, validationSchema };
