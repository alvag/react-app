import { useState } from 'react';
import { OnChangeArgs, ProductInCart } from '../interfaces/interfaces.ts';

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart }>( {} );

    const onProductCountChange = ( { count, product }: OnChangeArgs ) => {
        setShoppingCart( oldShoppingCart => {
            if ( count === 0 ) {
                const { [ product.id ]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: {
                    ...product,
                    count,
                },
            };
        } );
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};
