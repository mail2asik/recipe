import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Alert, Spinner } from 'react-bootstrap';

import { initialValues, validationSchema } from './login.validations';

const Login = ({ loginRequest }) => {
  const [showError, setShowError] = useState(false);

  return (
    <div className="container h-100">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Welcome User!</h1>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setShowError(false);
            loginRequest(values)
              .then(
                res => {
                  // history.push('/dashboard');
                },
                err => {
                  setShowError(err.message_detail);
                  values.password = '';
                }
              )
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="col-sm-12 col-md-8 col-lg-5">
              {showError && (
                <Alert
                  variant="danger"
                  onClose={() => setShowError(false)}
                  dismissible
                >
                  {showError}
                </Alert>
              )}
              <div className="mb-3 required">
                <label className="form-label">Email address</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className={`form-control ${
                    touched.email && errors.email ? 'is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3 required">
                <label className="form-label">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`form-control ${
                    touched.password && errors.password ? 'is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}{' '}
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="text-center mt-2">
        <Link className="small" to="/auth/forgot-password">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
