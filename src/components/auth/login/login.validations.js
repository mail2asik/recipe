import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: ''
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter email address')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Please enter password')
    .min(6, 'Please enter valid password')
});

export { initialValues, validationSchema };
