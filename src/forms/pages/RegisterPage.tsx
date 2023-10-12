import '../styles/styles.css';
import { FormEvent } from 'react';
import { useForm } from '../hooks';

export const RegisterPage = () => {

    const { onChange, formData, resetForm, isValidEmail } = useForm( {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    } );

    const { name, email, password, repeatPassword } = formData;


    const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        console.log( formData );
    };

    return (
        <div>
            <h1>RegisterPage</h1>

            <form onSubmit={ onSubmit }>
                <input type="text"
                       placeholder="Name"
                       name="name"
                       value={ name }
                       onChange={ onChange }
                       className={ `${ name.trim().length <= 0 && 'has-error' }` }
                />

                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input type="email"
                       placeholder="Email"
                       name="email"
                       value={ email }
                       onChange={ onChange }
                       className={ `${ !isValidEmail( email ) && 'has-error' }` }
                />

                { !isValidEmail( email ) && <span>El email no es válido</span> }

                <input type="password"
                       placeholder="Password"
                       name="password"
                       value={ password }
                       onChange={ onChange }
                       className={ `${ password.trim().length <= 0 && 'has-error' }` }
                />

                { password.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password.trim().length < 6 && password.trim().length > 0 &&
                    <span>La contraseña debe tener al menos 6 caracteres</span> }

                <input type="password" placeholder="Repeat Password" name="repeatPassword" value={ repeatPassword }
                       onChange={ onChange }/>

                { repeatPassword.trim().length <= 0 && <span>Este campo es necesario</span> }
                { repeatPassword !== password && repeatPassword.trim().length > 0 &&
                    <span>Las contraseñas no coinciden</span> }

                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm }>Reset form</button>
            </form>
        </div>
    );
};
