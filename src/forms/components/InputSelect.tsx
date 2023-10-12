import { ErrorMessage, useField } from 'formik';

interface InputSelectProps {
    label: string;
    name: string;
    placeholder?: string;

    [ key: string ]: any;
}

export const InputSelect = ( { label, ...props }: InputSelectProps ) => {
    const [ field ] = useField( props );

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select id={ props.id || props.name } { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span"/>
        </>
    );
};
