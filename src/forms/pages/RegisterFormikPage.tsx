import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { InputText } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={ {
                    name: '',
                    email: '',
                    password: '',
                    repeatPassword: '',
                } }
                onSubmit={ ( values ) => {
                    console.log( values );
                } }
                validationSchema={
                    Yup.object( {
                        name: Yup.string().min( 3, 'Must be 3 characters or more' ).max( 15, 'Must be 15 characters or less' ).required( 'Name is required' ),
                        email: Yup.string().email( 'Invalid email address' ).required( 'Email is required' ),
                        password: Yup.string().required( 'Password is required' ).min( 6, 'Must be 6 characters or more' ),
                        repeatPassword: Yup.string().required( 'Repeat password is required' ).oneOf( [ Yup.ref( 'password' ) ], 'Passwords must match' ),
                    } )
                }
            >
                {
                    ( { handleReset } ) => (
                        <Form>
                            <InputText label="Nombre" name="name"/>

                            <InputText label="Correo" name="email" type="email"/>

                            <InputText label="Contraseña" name="password" type="password"/>

                            <InputText label="Repetir Contraseña" name="repeatPassword" type="password"/>

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset }>Reset form</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    );
};
