import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik<FormValues>( {
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log( values );
        },
        validationSchema: Yup.object().shape( {
            firstName: Yup.string().required( 'First name is required' ).max( 15, 'Must be 15 characters or less' ),
            lastName: Yup.string().required( 'Last name is required' ).max( 10, 'Must be 10 characters or less' ),
            email: Yup.string().email( 'Invalid email address' ).required( 'Email is required' ),
        } ),
    } );

    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" { ...getFieldProps( 'firstName' ) }/>

                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" { ...getFieldProps( 'lastName' ) }/>

                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="email">Email</label>
                <input type="email" id="email" { ...getFieldProps( 'email' ) }/>

                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
