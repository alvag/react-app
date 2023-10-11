import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks';
import { products } from '../data';


export const ShoppingPage = () => {
    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={ { display: 'flex', flexWrap: 'wrap' } }>

                {
                    products.map( product => (
                        <ProductCard key={ product.id } product={ product } className="bg-dark text-white"
                                     onChange={ onProductCountChange }
                                     value={ shoppingCart[ product.id ]?.count || 0 }
                        >
                            <ProductImage className="custom-image"
                                          style={ { boxShadow: '10px 10px 10px rgba(0,0,0,0.3)' } }/>
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ) )
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.entries( shoppingCart ).map( ( [ key, product ] ) => (
                        <ProductCard key={ key } product={ product } className="bg-dark text-white"
                                     value={ product.count }
                                     style={ { width: '100px' } }
                                     onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image"
                                          style={ { boxShadow: '10px 10px 10px rgba(0,0,0,0.3)' } }/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ) )
                }

            </div>
        </div>
    );
};
