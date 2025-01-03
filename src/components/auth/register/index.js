import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Alert, Spinner } from 'react-bootstrap';

import { initialValues, validationSchema } from './register.validation';

const Register = ({ registerRequest }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <div className="container h-100">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Register</h1>
      </div>
      {showSuccess && <Alert variant="success">{showSuccess}</Alert>}
      {!showSuccess && (
        <div className="row h-100 justify-content-center align-items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setShowError(false);
              registerRequest(values)
                .then(
                  res => {
                    setShowSuccess(
                      'You have been successfully registered. Please check your mail and activate your account.'
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
                  <label className="form-label">Name</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className={`form-control ${
                      touched.name && errors.name ? 'is-invalid' : ''
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>

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
                  <small className="text-muted form-text">
                    We'll never share your email with anyone else.
                  </small>
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

                <div className="mb-3 required">
                  <label className="form-label">Confirm Password</label>
                  <Field
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
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

export default Register;
