import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import formJson from '../data/custom-form.json';
import { InputSelect, InputText } from '../components';

const initialValues: { [ key: string ]: any } = {};
const requiredFields: { [ key: string ]: any } = {};

for ( const { name, value, validations } of formJson ) {
    initialValues[ name ] = value;

    if ( !validations?.length ) continue;

    let schema = Yup.string();

    for ( const validation of validations ) {
        if ( validation.type === 'required' ) {
            schema = schema.required( 'This field is required' );
        }

        if ( validation.type === 'minLength' ) {
            const { value = 2 } = validation as any;
            schema = schema.min( value, `Must be at least ${ value } characters` );
        }

        if ( validation.type === 'email' ) {
            schema = schema.email( 'Invalid email address' );
        }
    }

    requiredFields[ name ] = schema;
}

const validationSchema = Yup.object( { ...requiredFields } );

export const DynamicForm = () => {
    return (
        <div>
            <h1>DynamicForm</h1>

            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ ( values ) => {
                    console.log( values );
                } }
            >
                { () => (
                    <Form>
                        {
                            formJson.map( ( { name, label, type, placeholder, options } ) => {
                                if ( type === 'input' || type === 'email' || type === 'password' ) {
                                    return <InputText key={ name } label={ label } name={ name }
                                                      type={ type as any }
                                                      placeholder={ placeholder }/>;
                                }

                                if ( type === 'select' ) {
                                    return <InputSelect key={ name } name={ name } label={ label }>
                                        <option value="">Select an option</option>

                                        { options?.map( ( { id, label } ) => {
                                            return <option key={ id } value={ id }>{ label }</option>;
                                        } ) }
                                    </InputSelect>;
                                }

                                return null;

                            } )
                        }

                        <button type="submit">Submit</button>
                    </Form>
                ) }
            </Formik>
        </div>
    );
};
