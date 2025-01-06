import * as Yup from 'yup';

const initialValues = {
  category: '',
  title: '',
  ingredients: '',
  short_desc: '',
  long_desc: '',
  image: ''
};

const validationSchema = Yup.object().shape({
  category: Yup.string()
    .required('Please select a category'),
  title: Yup.string()
    .required('Please enter title')
    .min(10, 'Please enter at least 10 characters'),
   image: Yup.string()
    .required('Please upload a photo')
    .min(1, 'Please select at least 1 photo'),
  ingredients: Yup.string()
    .required('Please enter ingredients')
    .min(10, 'Please enter at least 10 characters'),
  short_desc: Yup.string()
    .required('Please enter short description')
    .min(10, 'Please enter at least 10 characters'),
  long_desc: Yup.string()
    .required('Please enter long description')
    .min(20, 'Please enter at least 20 characters')
});

export { initialValues, validationSchema };
