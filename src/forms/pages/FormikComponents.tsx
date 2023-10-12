import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={ {
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                } }
                onSubmit={ ( values ) => {
                    console.log( values );
                } }
                validationSchema={ Yup.object().shape( {
                    firstName: Yup.string().required( 'First name is required' ).max( 15, 'Must be 15 characters or less' ),
                    lastName: Yup.string().required( 'Last name is required' ).max( 10, 'Must be 10 characters or less' ),
                    email: Yup.string().email( 'Invalid email address' ).required( 'Email is required' ),
                    terms: Yup.boolean().oneOf( [ true ], 'You must accept the terms' ),
                    jobType: Yup.string().required( 'Job type is required' )
                        .notOneOf( [ 'designer' ], 'Job type is not valid' ),
                } ) }
            >
                { () => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName"/>
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastName"/>
                        <ErrorMessage name="lastName" component="span"/>

                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="jobType">Job Type</label>
                        <Field as="select" name="jobType">
                            <option value="">-- Select a job type --</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Manager</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/>

                        <label htmlFor="terms">
                            <Field type="checkbox" name="terms" id="terms"/>
                            I accept the terms
                        </label>
                        <ErrorMessage name="terms" component="span"/>

                        <button type="submit">Submit</button>
                    </Form>
                ) }

            </Formik>


        </div>
    );
};
