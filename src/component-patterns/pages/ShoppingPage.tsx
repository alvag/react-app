import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';

const product = {
    id: '1',
    title: 'Coffee Mug Product',
    img: './coffee-mug.png',
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>

            <div style={ { display: 'flex', flexWrap: 'wrap' } }>
                <ProductCard product={ product }>
                    <ProductCard.Image/>
                    <ProductCard.Title/>
                    <ProductCard.Buttons/>
                </ProductCard>

                <ProductCard product={ product }>
                    <ProductImage/>
                    <ProductTitle title="Hola Mundo"/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    );
};
