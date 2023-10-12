import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {
    const validate = ( values: FormValues ) => {
        const errors: FormikErrors<FormValues> = {};

        if ( !values.firstName ) {
            errors.firstName = 'First name is required';
        } else if ( values.firstName.length >= 15 ) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if ( !values.lastName ) {
            errors.lastName = 'Last name is required';
        } else if ( values.lastName.length >= 10 ) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if ( !values.email ) {
            errors.email = 'Email is required';
        } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik<FormValues>( {
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log( values );
        },
        validate,
    } );

    return (
        <div>
            <h1>Formik Basic</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName"
                       onChange={ handleChange }
                       onBlur={ handleBlur }
                       value={ values.firstName }
                />

                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName"
                       onChange={ handleChange }
                       onBlur={ handleBlur }
                       value={ values.lastName }
                />

                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"
                       onChange={ handleChange }
                       onBlur={ handleBlur }
                       value={ values.email }
                />

                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
