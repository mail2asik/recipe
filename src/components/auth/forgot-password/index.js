import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Alert, Spinner } from 'react-bootstrap';

import { initialValues, validationSchema } from './forgotPassword.validations';

const ForgotPassword = ({ forgotPasswordRequest }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="container h-100">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Forgot Password</h1>
      </div>
      {showSuccess && <Alert variant="success">{showSuccess}</Alert>}

      {!showSuccess && (
        <div className="row h-100 justify-content-center align-items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              forgotPasswordRequest(values).finally(() => {
                setShowSuccess(
                  'RESET PASSWORD EMAIL SENT (IF YOUR EMAIL EXISTS). Check your email for instructions on how to reset your password.'
                );
                setSubmitting(false);
              });
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="col-sm-12 col-md-8 col-lg-5">
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
      )}

      <div className="text-center mt-2">
        <Link className="small" to="/auth/login">
          Login?
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
