import { CSSProperties, ReactNode } from 'react';
import styles from '../../styles/styles.module.css';
import { useProduct } from '../../hooks';
import { Product } from './interfaces.ts';
import { ProductContext } from './productContext.ts';
import { ProductButtons, ProductImage, ProductTitle } from './';
import { OnChangeArgs } from '../../interfaces/interfaces.ts';

interface ProductCardProps {
    product: Product;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
}

export const ProductCard = ( { children, product, className, style, onChange, value }: ProductCardProps ) => {
    const { counter, increaseBy } = useProduct( { onChange, product, value } );
    const { Provider } = ProductContext;

    return (
        <Provider value={ {
            counter,
            increaseBy,
            product,
        } }>
            <div className={ `${ styles.productCard } ${ className ? className : '' }` }
                 style={ style }
            >
                { children }
            </div>
        </Provider>
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
