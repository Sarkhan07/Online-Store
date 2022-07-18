import { Product } from '../interfaces/products';

export interface CartProducts {
  [key: string]: {
    amount: number;
    product: Product;
  };
}

export interface Cart {
  products: CartProducts;
}

export interface State {
  cart: Cart;
  products: Product[];
}
