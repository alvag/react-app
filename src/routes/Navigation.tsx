import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../assets/react.svg';
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from '../forms/pages';

interface NavigationProps {
}

export const Navigation = ( {}: NavigationProps ) => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="logo"/>

                    <ul>
                        <li>
                            <NavLink to="/register"
                                     className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Register Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic"
                                     className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Basic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup"
                                     className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Yup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components"
                                     className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction"
                                     className={ ( { isActive } ) => isActive ? 'nav-active' : '' }>
                                Formik Abstraction
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={ <RegisterPage/> }/>
                    <Route path="/formik-basic" element={ <FormikBasicPage/> }/>
                    <Route path="/formik-yup" element={ <FormikYupPage/> }/>
                    <Route path="/formik-components" element={ <FormikComponents/> }/>
                    <Route path="/formik-abstraction" element={ <FormikAbstraction/> }/>
                    <Route path="*" element={ <Navigate to="/" replace/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
