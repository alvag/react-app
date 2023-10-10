import { CSSProperties, useContext } from 'react';
import styles from '../../styles/styles.module.css';
import { ProductContext } from './productContext.ts';

interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle = ( { title, className, style }: ProductTitleProps ) => {
    const { product } = useContext( ProductContext );
    return (
        <span className={ `${ styles.productDescription } ${ className ? className : '' }` }
              style={ style }
        >
            { title ? title : product.title }
        </span>
    );
};
