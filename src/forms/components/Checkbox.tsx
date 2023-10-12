import { ErrorMessage, useField } from 'formik';

interface CheckboxProps {
    label: string;
    name: string;

    [ key: string ]: any;
}

export const Checkbox = ( { label, ...props }: CheckboxProps ) => {
    const [ field ] = useField( { ...props, type: 'checkbox' } );
    return (
        <>
            <label htmlFor={ props.id || props.name }>
                <input type="checkbox" id={ props.id || props.name } { ...field } { ...props }/>
                { label }
            </label>
            <ErrorMessage name={ props.name } component="span"/>
        </>
    );
};
