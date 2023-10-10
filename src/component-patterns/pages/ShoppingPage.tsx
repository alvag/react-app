import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';
import '../styles/custom-styles.css';

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

                <ProductCard product={ product } className="bg-dark text-white">
                    <ProductImage className="custom-image"/>
                    <ProductTitle title="Hola Mundo" className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={ product }
                             style={ { backgroundColor: '#70D1F8' } }
                >
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    );
};
