import { CSSProperties, ReactNode } from 'react';
import styles from '../../styles/styles.module.css';
import { useProduct } from '../../hooks';
import { Product } from './interfaces.ts';
import { ProductContext } from './productContext.ts';
import { ProductButtons, ProductImage, ProductTitle } from './';
import { InitialValues, OnChangeArgs, ProductCardHandlers } from '../../interfaces/interfaces.ts';

interface ProductCardProps {
    product: Product;
    children: ( args: ProductCardHandlers ) => ReactNode;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ( {
                                 children,
                                 product,
                                 className,
                                 style,
                                 onChange,
                                 value,
                                 initialValues,
                             }: ProductCardProps ) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( {
        onChange,
        product,
        value,
        initialValues,
    } );
    const { Provider } = ProductContext;

    return (
        <Provider value={ {
            counter,
            increaseBy,
            product,
            maxCount,
        } }>
            <div className={ `${ styles.productCard } ${ className ? className : '' }` }
                 style={ style }
            >
                { children( {
                    count: counter,
                    increaseBy,
                    maxCount,
                    product,
                    isMaxCountReached,
                    reset,
                } ) }
            </div>
        </Provider>
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
