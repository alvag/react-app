import { useEffect, useState } from 'react';
import { Product } from '../components/ProductCard';
import { OnChangeArgs } from '../interfaces/interfaces.ts';

interface UseProductArgs {
    product: Product;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }: UseProductArgs ) => {
    const [ counter, setCounter ] = useState( value );

    const increaseBy = ( value: number ) => {
        const newCounter = Math.max( counter + value, 0 );
        setCounter( newCounter );

        onChange && onChange( { count: newCounter, product } );
    };

    useEffect( () => {
        setCounter( value );
    }, [ value ] );

    return {
        counter,
        increaseBy,
    };
};
