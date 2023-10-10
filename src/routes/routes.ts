import { lazy, LazyExoticComponent, ReactElement } from 'react';
import { NoLazy } from '../lazyload/pages';

type JSXComponent = () => ReactElement;

interface Route {
    to: string,
    path: string,
    name: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
}

const Lazy1 = lazy( () => import('../lazyload/pages/LazyPage1') );
const Lazy2 = lazy( () => import('../lazyload/pages/LazyPage2') );
const Lazy3 = lazy( () => import('../lazyload/pages/LazyPage3') );

const lazyLayout = lazy( () => import(/* webpackChunkName: "lazy-layout" */ '../lazyload/layout/LazyLayout') );

export const routes: Route[] = [
    {
        to: '/lazy-layout/',
        path: '/lazy-layout/*',
        name: 'Lazy Layout',
        Component: lazyLayout,
    },
    {
        to: '/lazy1',
        path: 'lazy1',
        name: 'Lazy 1',
        Component: Lazy1,
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        name: 'Lazy 2',
        Component: Lazy2,
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        name: 'Lazy 3',
        Component: Lazy3,
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        name: 'No Lazy',
        Component: NoLazy,
    },

];
