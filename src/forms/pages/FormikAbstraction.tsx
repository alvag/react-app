import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Checkbox, InputSelect, InputText } from '../components';
import '../styles/styles.css';


export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

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
                        <InputText label="First name" name="firstName" placeholder="First name"/>

                        <InputText label="Last name" name="lastName" placeholder="Last name"/>

                        <InputText label="Email" type="email" name="email" placeholder="user@test.com"/>

                        <InputSelect label="Job Type" name="jobType">
                            <option value="">-- Select a job type --</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Manager</option>
                        </InputSelect>

                        <Checkbox label="I accept the terms" name="terms"/>

                        <button type="submit">Submit</button>
                    </Form>
                ) }

            </Formik>


        </div>
    );
};
