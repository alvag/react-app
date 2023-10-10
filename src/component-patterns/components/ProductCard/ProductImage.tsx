import { useContext } from 'react';
import noImage from '../../assets/no-image.jpg';
import styles from '../../styles/styles.module.css';
import { ProductContext } from './productContext.ts';

export const ProductImage = ( { img = '' } ) => {
    const { product } = useContext( ProductContext );
    let productImage = noImage;

    if ( img ) {
        productImage = img;
    } else if ( product.img ) {
        productImage = product.img;
    }

    return (
        <img className={ styles.productImg } src={ productImage } alt="product image"/>
    );
};
