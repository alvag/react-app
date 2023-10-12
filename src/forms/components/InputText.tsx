import { ErrorMessage, useField } from 'formik';

interface InputTextProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    id?: string;
    placeholder?: string;

    [ key: string ]: any;
}

export const InputText = ( { label, ...props }: InputTextProps ) => {
    const [ field ] = useField( props );
    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input type="text" id={ props.id || props.name } { ...field } { ...props }/>
            <ErrorMessage name={ props.name } component="span"/>
            {/*{
                meta.touched && meta.error && <span>{ meta.error }</span>
            }*/ }
        </>
    );
};
