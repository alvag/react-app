import { useEffect, useRef, useState } from 'react';
import { Product } from '../components/ProductCard';
import { InitialValues, OnChangeArgs } from '../interfaces/interfaces.ts';

interface UseProductArgs {
    product: Product;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: UseProductArgs ) => {
    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );

    const isMounted = useRef( false );

    const increaseBy = ( value: number ) => {
        let newCounter = Math.max( counter + value, 0 );

        if ( initialValues?.maxCount ) {
            newCounter = Math.min( newCounter, initialValues.maxCount );
        }

        setCounter( newCounter );
        onChange && onChange( { count: newCounter, product } );
    };

    const reset = () => {
        setCounter( initialValues?.count || value );
    };

    useEffect( () => {
        if ( !isMounted.current ) return;

        setCounter( initialValues?.count || value );
    }, [ value ] );

    useEffect( () => {
        isMounted.current = true;
    }, [] );


    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && counter >= initialValues.maxCount,
        reset,
    };
};
