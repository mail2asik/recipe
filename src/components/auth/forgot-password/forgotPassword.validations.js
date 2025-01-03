import * as Yup from 'yup';

const initialValues = {
  email: ''
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter email address')
    .email('Invalid email address')
});

export { initialValues, validationSchema };
