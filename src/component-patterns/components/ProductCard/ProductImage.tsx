import { CSSProperties, useContext } from 'react';
import noImage from '../../assets/no-image.jpg';
import styles from '../../styles/styles.module.css';
import { ProductContext } from './productContext.ts';

interface ProductImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ( { img, className, style }: ProductImageProps ) => {
    const { product } = useContext( ProductContext );
    let productImage = noImage;

    if ( img ) {
        productImage = img;
    } else if ( product.img ) {
        productImage = product.img;
    }

    return (
        <img className={ `${ styles.productImg } ${ className ? className : '' }` }
             style={ style }
             src={ productImage }
             alt="product image"/>
    );
};
