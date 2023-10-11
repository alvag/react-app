import { Product } from '../components/ProductCard';

export interface OnChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}
