import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Alert, Spinner } from 'react-bootstrap';

import { initialValues, validationSchema } from './addRecipe.validations';

const AddRecipe = ({storeRecipeRequest}) => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    return (
        <>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Add Recipe</h6>
          </div>
          <div className="card-body">

                <div className="row h-100 justify-content-center align-items-center">
                    <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setShowError(false);
                        storeRecipeRequest(values)
                        .then(
                            res => {
                                return navigate("/dashboard");
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
                    {({ touched, errors, isSubmitting, setFieldValue }) => (
                        <Form>
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
                            <label className="form-label">Category</label>
                            <Field
                            as="select"
                            name="category"
                            placeholder="Select Category"
                            className={`form-control ${
                                touched.category && errors.category ? 'is-invalid' : ''
                            }`}
                            >
                                <option value="">Select</option>
                                <option value="veg">Vegetarian</option>
                                <option value="non_veg">Non Vegetarian</option>
                            </Field>
                            <ErrorMessage
                            component="div"
                            name="category"
                            className="invalid-feedback"
                            />
                        </div>

                        <div className="mb-3 required">
                            <label className="form-label">Title</label>
                            <Field
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            className={`form-control ${
                                touched.title && errors.title ? 'is-invalid' : ''
                            }`}
                            />
                            <ErrorMessage
                            component="div"
                            name="title"
                            className="invalid-feedback"
                            />
                        </div>

                        <div className="mb-3 required">
                            <label className="form-label">Photo</label>
                            <input id="image" name="image" type="file" className={`form-control ${touched.image && errors.image ? 'is-invalid' : ''}`} onChange={(event) => {
                            setFieldValue("image", event.currentTarget.files[0]);
                            }} />
                            <ErrorMessage
                            component="div"
                            name="image"
                            className="invalid-feedback"
                            />
                        </div>

                        <div className="mb-3 required">
                            <label className="form-label">Ingredients</label>
                            <Field
                            as="textarea"
                            name="ingredients"
                            placeholder="Enter Ingredients"
                            style={{ "height" : "150px"}}
                            className={`form-control ${
                                touched.ingredients && errors.ingredients ? 'is-invalid' : ''
                            }`}
                            >
                            </Field>
                            <ErrorMessage
                            component="div"
                            name="ingredients"
                            className="invalid-feedback"
                            />
                        </div>

                        <div className="mb-3 required">
                            <label className="form-label">Short Description</label>
                            <Field
                            as="textarea"
                            name="short_desc"
                            placeholder="Enter Short Description"
                            style={{ "height" : "150px"}}
                            className={`form-control ${
                                touched.short_desc && errors.short_desc ? 'is-invalid' : ''
                            }`}
                            >
                            </Field>
                            <ErrorMessage
                            component="div"
                            name="short_desc"
                            className="invalid-feedback"
                            />
                        </div>

                        <div className="mb-3 required">
                            <label className="form-label">Long Description</label>
                            <Field
                            as="textarea"
                            name="long_desc"
                            placeholder="Enter Long Description"
                            style={{ "height" : "150px"}}
                            className={`form-control ${
                                touched.long_desc && errors.long_desc ? 'is-invalid' : ''
                            }`}
                            >
                            </Field>
                            <ErrorMessage
                            component="div"
                            name="long_desc"
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


          </div>
        </div>
        </>
    )
}

export default AddRecipe;