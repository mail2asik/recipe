import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Alert, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { initialValues, validationSchema } from './resetPassword.validations';

const ResetPassword = ({ resetPasswordRequest }) => {
  const { email, token } = useParams();
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <div className="container h-100">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Reset Password</h1>
      </div>

      {showSuccess && <Alert variant="success">{showSuccess}</Alert>}

      {showError && <Alert variant="danger">{showError}</Alert>}

      {!showSuccess && !showError && (
        <div className="row h-100 justify-content-center align-items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              resetPasswordRequest(
                values,
                email,
                token
              )
                .then(
                  res => {
                    setShowSuccess(
                      'You have been successfully updated your password.'
                    );
                  },
                  err => {
                    setShowError(err.message_detail);
                  }
                )
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="col-sm-12 col-md-8 col-lg-5">
                <div className="mb-3 required">
                  <label className="form-label">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
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

                <div className="mb-3 required">
                  <label className="form-label">Confirm Password</label>
                  <Field
                    type="password"
                    name="password_confirmation"
                    placeholder="Enter confirm password"
                    className={`form-control ${
                      touched.password_confirmation &&
                      errors.password_confirmation
                        ? 'is-invalid'
                        : ''
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password_confirmation"
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
    </div>
  );
};

export default ResetPassword;
