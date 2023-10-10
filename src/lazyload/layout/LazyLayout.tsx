import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Page1 } from './pages/Page1.tsx';
import { Page2 } from './pages/Page2.tsx';
import { Page3 } from './pages/Page3.tsx';

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout</h1>

            <ul>
                <li>
                    <NavLink to="lazy1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={ <Page1/> }/>
                <Route path="lazy2" element={ <Page2/> }/>
                <Route path="lazy3" element={ <Page3/> }/>

                <Route path="*" element={ <Navigate replace to="lazy1"/> }/>
            </Routes>
        </div>
    );
};

export default LazyLayout;
