import styles from '../../styles/styles.module.css';
import { useProduct } from '../../hooks';
import { ProductCardProps } from './interfaces.ts';
import { ProductContext } from './productContext.ts';
import { ProductButtons, ProductImage, ProductTitle } from './';

export const ProductCard = ( { children, product }: ProductCardProps ) => {
    const { counter, increaseBy } = useProduct();
    const { Provider } = ProductContext;

    return (
        <Provider value={ {
            counter,
            increaseBy,
            product,
        } }>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
